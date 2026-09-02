/**
 * SOATGA Shared Constants & Utilities
 */

export const CURRENCY_CODE = 'FCFA';

/**
 * Format an integer or float amount into FCFA currency string
 * Example: 65000 -> "65 000 FCFA"
 */
export function formatFCFA(amount: number): string {
  const formatted = Math.round(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return `${formatted} FCFA`;
}

export enum PaymentMethod {
  ORANGE_MONEY = 'ORANGE_MONEY',
  MOOV_MONEY = 'MOOV_MONEY',
  CASH = 'CASH',
  BANK = 'BANK',
  OTHER = 'OTHER',
}

export const PAYMENT_METHOD_LABELS: Record<PaymentMethod, string> = {
  [PaymentMethod.ORANGE_MONEY]: 'Orange Money',
  [PaymentMethod.MOOV_MONEY]: 'Moov Money',
  [PaymentMethod.CASH]: 'Espèces',
  [PaymentMethod.BANK]: 'Virement bancaire',
  [PaymentMethod.OTHER]: 'Autre',
};

export enum SaleStatus {
  DRAFT = 'DRAFT',
  CONFIRMED = 'CONFIRMED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  PARTIALLY_PAID = 'PARTIALLY_PAID',
}

export enum DraftStatus {
  DRAFT = 'DRAFT',
  WAITING_CONFIRMATION = 'WAITING_CONFIRMATION',
  CONFIRMED = 'CONFIRMED',
  REJECTED = 'REJECTED',
  EXPIRED = 'EXPIRED',
}

export enum UserRole {
  OWNER = 'OWNER',
  MANAGER = 'MANAGER',
  SELLER = 'SELLER',
  CASHIER = 'CASHIER',
  SUPPORT = 'SUPPORT',
}

export interface TenantContext {
  organizationId: string;
  shopId: string;
  userId: string;
  role: UserRole;
}
