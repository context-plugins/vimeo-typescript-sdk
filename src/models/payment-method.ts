import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { card1Schema, type Card1 } from "./card1.js";
import { type24Schema, type Type24 } from "./type24.js";

export type PaymentMethod = {
  /** The ID of the account. */
  accountId: string;
  /** Information about the card used to make the payment. */
  card?: Card1;
  /** The time when the payment method was created. */
  createdAt: string;
  /** The time when the payment method was disabled. */
  disabledAt: string;
  /** The ID of the payment method. */
  id: string;
  /** Whether the payment method is the default payment method for the account. */
  isDefault: boolean;
  /**
   * The type of payment method.
   *
   * Option descriptions:
   *  * `PAYMENT_METHOD_TYPES_APPLEPAY` - The payment method is Apple Pay.
   *  * `PAYMENT_METHOD_TYPES_BANK_ACCOUNT` - The payment method is a bank account.
   *  * `PAYMENT_METHOD_TYPES_CARD` - The payment method is a card.
   *  * `PAYMENT_METHOD_TYPES_CC_REF` - The payment method is a credit card reference.
   *  * `PAYMENT_METHOD_TYPES_GOOGLEPAY` - The payment method is Google Pay.
   *  * `PAYMENT_METHOD_TYPES_PAYPAL` - The payment method is a PayPal account.
   *  * `PAYMENT_METHOD_TYPES_TYPES_UNSPECIFIED` - The payment method type is unspecified.
   */
  type: Type24;
  /** The time when the payment method was last updated. */
  updatedAt: string;
};

export const paymentMethodSchema: Schema<PaymentMethod> = s.object<PaymentMethod>({
  accountId: s.string(),
  card: s.optional(s.lazy(() => card1Schema)),
  createdAt: s.string(),
  disabledAt: s.string(),
  id: s.string(),
  isDefault: s.boolean(),
  type: type24Schema,
  updatedAt: s.string(),
  _keysMap: {
    accountId: "account_id",
    createdAt: "created_at",
    disabledAt: "disabled_at",
    isDefault: "is_default",
    updatedAt: "updated_at",
  },
});
