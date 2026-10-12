import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { billingAddressSchema, type BillingAddress } from "./billing-address.js";
import { brandSchema, type Brand } from "./brand.js";

/** Information about the card used to make the payment. */
export type Card1 = {
  /** The billing address of the card. */
  billingAddress?: BillingAddress;
  /** The bank identification number of the card. */
  bin?: string;
  /**
   * The brand of the card.
   *
   * Option descriptions:
   *  * `CARD_BRAND_AMERICAN_EXPRESS` - The card brand is American Express.
   *  * `CARD_BRAND_DISCOVER` - The card brand is Discover.
   *  * `CARD_BRAND_JCB` - The card brand is JCB.
   *  * `CARD_BRAND_MASTER_CARD` - The card brand is Mastercard.
   *  * `CARD_BRAND_UNION_PAY` - The card brand is UnionPay.
   *  * `CARD_BRAND_UNSPECIFIED` - The card brand is unspecified.
   *  * `CARD_BRAND_VISA` - The card brand is Visa.
   */
  brand?: Brand;
  /** The name of the cardholder. */
  cardholderName?: string;
  /** The expiration month of the card. */
  expirationMonth?: number;
  /** The expiration year of the card. */
  expirationYear?: number;
  /** The last four digits of the card. */
  lastFourDigits?: string;
};

export const card1Schema: Schema<Card1> = s.object<Card1>({
  billingAddress: s.optional(s.lazy(() => billingAddressSchema)),
  bin: s.optional(s.string()),
  brand: s.optional(s.lazy(() => brandSchema)),
  cardholderName: s.optional(s.string()),
  expirationMonth: s.optional(s.float64()),
  expirationYear: s.optional(s.float64()),
  lastFourDigits: s.optional(s.string()),
  _keysMap: {
    billingAddress: "billing_address",
    cardholderName: "cardholder_name",
    expirationMonth: "expiration_month",
    expirationYear: "expiration_year",
    lastFourDigits: "last_four_digits",
  },
});
