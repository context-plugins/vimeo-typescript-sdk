import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { balanceSchema, type Balance } from "./balance.js";
import { periodSchema, type Period } from "./period.js";

/** Information about the user's AI credits quota. */
export type AiCreditsQuota = {
  /** The maximum number of AI credits granted to the authenticated user. */
  available?: number;
  /**
   * An array of objects listing the balances and expiration dates for the user's AI credits quota.
   */
  balances?: Balance[];
  /**
   * The time period for which the AI credit activity is evaluated.
   *
   * Option descriptions:
   *  * `lifetime` - The quota period is for the lifetime of the account.
   *  * `month` - The quota period is one month.
   *  * `week` - The quota period is one week.
   *  * `year` - The quota period is one year.
   */
  period?: Period;
  /** The number of AI credits that are remaining for the authenticated user. */
  remaining?: number;
  /** The date of the user's next AI credits reset. */
  resetDate?: string;
  /** The number of AI credits that have been spent. */
  used?: number;
};

export const aiCreditsQuotaSchema: Schema<AiCreditsQuota> = s.object<AiCreditsQuota>({
  available: s.optional(s.float64()),
  balances: s.optional(s.array(s.lazy(() => balanceSchema))),
  period: s.optional(s.lazy(() => periodSchema)),
  remaining: s.optional(s.float64()),
  resetDate: s.optional(s.string()),
  used: s.optional(s.float64()),
  _keysMap: {
    resetDate: "reset_date",
  },
});
