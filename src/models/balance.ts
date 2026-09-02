import { s, type Schema } from "../core/index.js";

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
