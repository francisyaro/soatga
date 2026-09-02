/**
 * SOATGA Deterministic Pricing & Calculation Engine
 * 
 * Principle 2.2: Financial calculations are STRICTLY deterministic.
 * The AI model NEVER calculates 10 * 6500 = 65000 FCFA.
 * The domain engine performs all multiplications, discounts, totals, paid amounts, and remaining credit balance.
 */

export interface CartItemInput {
  productId: string;
  quantity: number;
  unitPrice: number;
  discountAmount?: number;
}

export interface CalculatedCartItem {
  productId: string;
  quantity: number;
  unitPrice: number;
  discountAmount: number;
  totalPrice: number;
}

export interface SaleCalculationResult {
  items: CalculatedCartItem[];
  subtotal: number;
  totalDiscount: number;
  totalAmount: number;
  paidAmount: number;
  remainingBalance: number; // Reliquat / Crédit
  isFullyPaid: boolean;
}

export class PricingService {
  /**
   * Compute deterministic financial totals for a sale transaction
   */
  public static calculateSale(
    items: CartItemInput[],
    paidAmount: number = 0,
    globalDiscount: number = 0
  ): SaleCalculationResult {
    let subtotal = 0;
    let itemDiscountsSum = 0;

    const calculatedItems: CalculatedCartItem[] = items.map((item) => {
      if (item.quantity <= 0) {
        throw new Error(`La quantité doit être supérieure à zéro (reçu: ${item.quantity})`);
      }
      if (item.unitPrice < 0) {
        throw new Error(`Le prix unitaire ne peut être négatif (reçu: ${item.unitPrice})`);
      }

      const discount = item.discountAmount || 0;
      const rawLineTotal = item.quantity * item.unitPrice;
      const lineTotal = Math.max(0, rawLineTotal - discount);

      subtotal += rawLineTotal;
      itemDiscountsSum += discount;

      return {
        productId: item.productId,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        discountAmount: discount,
        totalPrice: lineTotal,
      };
    });

    const totalDiscount = itemDiscountsSum + globalDiscount;
    const totalAmount = Math.max(0, subtotal - totalDiscount);
    const validPaidAmount = Math.max(0, paidAmount);
    const remainingBalance = Math.max(0, totalAmount - validPaidAmount);
    const isFullyPaid = remainingBalance === 0;

    return {
      items: calculatedItems,
      subtotal,
      totalDiscount,
      totalAmount,
      paidAmount: validPaidAmount,
      remainingBalance,
      isFullyPaid,
    };
  }
}
