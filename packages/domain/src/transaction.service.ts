import { PaymentMethod, TenantContext } from '@soatga/shared';
import { PricingService, CartItemInput, SaleCalculationResult } from './pricing.service';

export interface CreateSaleTransactionCommand {
  idempotencyKey: string;
  customerId?: string;
  customerSpokenName?: string;
  items: CartItemInput[];
  payment?: {
    amount: number;
    method: PaymentMethod;
    reference?: string;
  };
  creditDueDate?: string; // YYYY-MM-DD
  notes?: string;
  draftId?: string;
}

export interface BusinessEvent {
  id: string;
  organizationId: string;
  shopId: string;
  type: string;
  entityType: string;
  entityId: string;
  actorId: string;
  payload: Record<string, any>;
  createdAt: string;
}

export interface PreparedAtomicSaleTransaction {
  saleId: string;
  calculation: SaleCalculationResult;
  events: Omit<BusinessEvent, 'id' | 'createdAt'>[];
  idempotencyKey: string;
}

export class TransactionService {
  /**
   * Prepares the atomic transaction structure for execution in PostgreSQL
   */
  public static prepareSaleTransaction(
    context: TenantContext,
    command: CreateSaleTransactionCommand
  ): PreparedAtomicSaleTransaction {
    const saleId = `sale_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    const paidAmount = command.payment ? command.payment.amount : 0;

    const calculation = PricingService.calculateSale(command.items, paidAmount);

    const events: Omit<BusinessEvent, 'id' | 'createdAt'>[] = [];

    // 1. Sale Confirmed Event
    events.push({
      organizationId: context.organizationId,
      shopId: context.shopId,
      type: 'SALE_CONFIRMED',
      entityType: 'sale',
      entityId: saleId,
      actorId: context.userId,
      payload: {
        saleId,
        customerId: command.customerId,
        itemsCount: calculation.items.length,
        totalAmount: calculation.totalAmount,
        paidAmount: calculation.paidAmount,
        remainingBalance: calculation.remainingBalance,
      },
    });

    // 2. Payment Received Event
    if (command.payment && command.payment.amount > 0) {
      events.push({
        organizationId: context.organizationId,
        shopId: context.shopId,
        type: 'PAYMENT_RECEIVED',
        entityType: 'payment',
        entityId: `pay_${saleId}`,
        actorId: context.userId,
        payload: {
          saleId,
          amount: command.payment.amount,
          method: command.payment.method,
          reference: command.payment.reference,
        },
      });

      // 3. Cash Account Updated Event
      events.push({
        organizationId: context.organizationId,
        shopId: context.shopId,
        type: 'CASH_INCREASED',
        entityType: 'cash_transaction',
        entityId: `cash_${saleId}`,
        actorId: context.userId,
        payload: {
          amount: command.payment.amount,
          paymentMethod: command.payment.method,
          description: `Vente ${saleId}`,
        },
      });
    }

    // 4. Receivable Created Event (if partial or credit sale)
    if (calculation.remainingBalance > 0) {
      events.push({
        organizationId: context.organizationId,
        shopId: context.shopId,
        type: 'RECEIVABLE_CREATED',
        entityType: 'receivable',
        entityId: `rec_${saleId}`,
        actorId: context.userId,
        payload: {
          saleId,
          customerId: command.customerId,
          amount: calculation.remainingBalance,
          dueDate: command.creditDueDate,
        },
      });

      if (command.creditDueDate) {
        events.push({
          organizationId: context.organizationId,
          shopId: context.shopId,
          type: 'REMINDER_CREATED',
          entityType: 'reminder',
          entityId: `rem_${saleId}`,
          actorId: context.userId,
          payload: {
            dueDate: command.creditDueDate,
            targetCustomerId: command.customerId,
            amount: calculation.remainingBalance,
          },
        });
      }
    }

    // 5. Stock Decreased Event
    calculation.items.forEach((item) => {
      events.push({
        organizationId: context.organizationId,
        shopId: context.shopId,
        type: 'STOCK_DECREASED',
        entityType: 'stock_movement',
        entityId: `stk_${saleId}_${item.productId}`,
        actorId: context.userId,
        payload: {
          productId: item.productId,
          quantity: item.quantity,
          saleId,
        },
      });
    });

    return {
      saleId,
      calculation,
      events,
      idempotencyKey: command.idempotencyKey,
    };
  }
}
