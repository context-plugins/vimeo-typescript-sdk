import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BillingAddress = {
  address?: string;
  city?: string;
  country?: string;
  postalCode?: string;
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
