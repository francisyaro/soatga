import { PaymentMethod } from '@soatga/shared';

export type VoiceIntent =
  | 'CREATE_SALE'
  | 'RECORD_PAYMENT'
  | 'CHECK_CUSTOMER_BALANCE'
  | 'CHECK_STOCK'
  | 'CREATE_CUSTOMER'
  | 'STOCK_ENTRY'
  | 'STOCK_ADJUSTMENT'
  | 'RECORD_EXPENSE'
  | 'GET_DAILY_REPORT'
  | 'CANCEL_SALE'
  | 'RETURN_PRODUCT'
  | 'HELP'
  | 'UNKNOWN';

export interface ExtractedItem {
  spokenProduct: string;
  quantity: number;
  unit?: string;
  unitPrice?: number;
}

export interface ExtractedCustomer {
  spokenName: string;
}

export interface ExtractedPayment {
  amount: number;
  method: PaymentMethod;
}

export interface ExtractedCredit {
  dueDateText?: string;
}

export interface VoiceExtraction {
  intent: VoiceIntent;
  customer?: ExtractedCustomer;
  items: ExtractedItem[];
  payment?: ExtractedPayment;
  credit?: ExtractedCredit;
  rawTranscription: string;
}

export interface FieldConfidenceScores {
  intentScore: number;
  customerScore: number;
  productScore: number;
  quantityScore: number;
  priceScore: number;
  paymentScore: number;
  dueDateScore: number;
}

export enum ConfidenceAction {
  ACCEPT = 'ACCEPT',
  CONFIRM_EXPLICITLY = 'CONFIRM_EXPLICITLY',
  CLARIFY_REQUIRED = 'CLARIFY_REQUIRED',
}

export class ConfidenceEngine {
  public static evaluateScore(score: number): ConfidenceAction {
    if (score >= 0.95) return ConfidenceAction.ACCEPT;
    if (score >= 0.8) return ConfidenceAction.CONFIRM_EXPLICITLY;
    return ConfidenceAction.CLARIFY_REQUIRED;
  }

  public static evaluateOverall(scores: FieldConfidenceScores): ConfidenceAction {
    const minScore = Math.min(
      scores.intentScore,
      scores.customerScore,
      scores.productScore,
      scores.quantityScore,
      scores.priceScore,
      scores.paymentScore
    );

    return this.evaluateScore(minScore);
  }
}
