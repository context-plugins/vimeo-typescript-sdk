import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The billing address of the card. */
export type BillingAddress = {
  /** The street address of the billing address. */
  address?: string;
  /** The city of the billing address. */
  city?: string;
  /** The country of the billing address. */
  country?: string;
  /** The postal code of the billing address. */
  postalCode?: string;
  /** The state of the billing address. */
  state?: string;
};

export const billingAddressSchema: Schema<BillingAddress> = s.object<BillingAddress>({
  address: s.optional(s.string()),
  city: s.optional(s.string()),
  country: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  state: s.optional(s.string()),
  _keysMap: {
    postalCode: "postal_code",
  },
});
