import { s, type Schema } from "../core/index.js";
import { balanceSchema, type Balance } from "./balance.js";
import { periodSchema, type Period } from "./period.js";

export type AiCreditsQuota = {
  available?: number;
  balances?: Balance[];
  period?: Period;
  remaining?: number;
  resetDate?: string;
  used?: number;
};

export const aiCreditsQuotaSchema: Schema<AiCreditsQuota> = s.object<AiCreditsQuota>({
  available: s.optional(s.number()),
  balances: s.optional(s.array(s.lazy(() => balanceSchema))),
  period: s.optional(s.lazy(() => periodSchema)),
  remaining: s.optional(s.number()),
  resetDate: s.optional(s.string()),
  used: s.optional(s.number()),
  _keysMap: {
    resetDate: "reset_date",
  },
});
