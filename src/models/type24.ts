import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
export const Type24 = {
  PaymentMethodTypesApplepay: "PAYMENT_METHOD_TYPES_APPLEPAY",
  PaymentMethodTypesBankAccount: "PAYMENT_METHOD_TYPES_BANK_ACCOUNT",
  PaymentMethodTypesCard: "PAYMENT_METHOD_TYPES_CARD",
  PaymentMethodTypesCcRef: "PAYMENT_METHOD_TYPES_CC_REF",
  PaymentMethodTypesGooglepay: "PAYMENT_METHOD_TYPES_GOOGLEPAY",
  PaymentMethodTypesPaypal: "PAYMENT_METHOD_TYPES_PAYPAL",
  PaymentMethodTypesTypesUnspecified: "PAYMENT_METHOD_TYPES_TYPES_UNSPECIFIED",
} as const;
export type Type24 = (typeof Type24)[keyof typeof Type24] | (string & {});

export const type24Schema: EnumSchema<Type24> = s.enumOf<Type24>(Type24);
