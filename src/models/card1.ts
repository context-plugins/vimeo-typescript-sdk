import { s, type Schema } from "../core/index.js";
import { billingAddressSchema, type BillingAddress } from "./billing-address.js";
import { brandSchema, type Brand } from "./brand.js";

export type Card1 = {
  billingAddress?: BillingAddress;
  bin?: string;
  brand?: Brand;
  cardholderName?: string;
  expirationMonth?: number;
  expirationYear?: number;
  lastFourDigits?: string;
};

export const card1Schema: Schema<Card1> = s.object<Card1>({
  billingAddress: s.optional(s.lazy(() => billingAddressSchema)),
  bin: s.optional(s.string()),
  brand: s.optional(s.lazy(() => brandSchema)),
  cardholderName: s.optional(s.string()),
  expirationMonth: s.optional(s.number()),
  expirationYear: s.optional(s.number()),
  lastFourDigits: s.optional(s.string()),
  _keysMap: {
    billingAddress: "billing_address",
    cardholderName: "cardholder_name",
    expirationMonth: "expiration_month",
    expirationYear: "expiration_year",
    lastFourDigits: "last_four_digits",
  },
});
