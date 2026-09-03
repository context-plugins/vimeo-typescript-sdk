import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Balance = {
  expirationDate?: string;
  remaining?: number;
};

export const balanceSchema: Schema<Balance> = s.object<Balance>({
  expirationDate: s.optional(s.string()),
  remaining: s.optional(s.number()),
  _keysMap: {
    expirationDate: "expiration_date",
  },
});
