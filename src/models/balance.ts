import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Balance = {
  /** The expiration date of the balance in ISO 8601 format. */
  expirationDate?: string;
  /** The number of AI credits that are remaining for the balance. */
  remaining?: number;
};

export const balanceSchema: Schema<Balance> = s.object<Balance>({
  expirationDate: s.optional(s.string()),
  remaining: s.optional(s.float64()),
  _keysMap: {
    expirationDate: "expiration_date",
  },
});
