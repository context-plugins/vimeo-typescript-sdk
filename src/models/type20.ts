import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type20 = {
  PaymentMethodTypesApplepay: "PAYMENT_METHOD_TYPES_APPLEPAY",
  PaymentMethodTypesBankAccount: "PAYMENT_METHOD_TYPES_BANK_ACCOUNT",
  PaymentMethodTypesCard: "PAYMENT_METHOD_TYPES_CARD",
  PaymentMethodTypesCcRef: "PAYMENT_METHOD_TYPES_CC_REF",
  PaymentMethodTypesGooglepay: "PAYMENT_METHOD_TYPES_GOOGLEPAY",
  PaymentMethodTypesPaypal: "PAYMENT_METHOD_TYPES_PAYPAL",
  PaymentMethodTypesTypesUnspecified: "PAYMENT_METHOD_TYPES_TYPES_UNSPECIFIED",
} as const;
export type Type20 = (typeof Type20)[keyof typeof Type20] | (string & {});

export const type20Schema: EnumSchema<Type20> = s.enumOf<Type20>(Type20);
