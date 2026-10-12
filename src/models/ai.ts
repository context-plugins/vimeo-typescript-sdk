import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditsPeriodSchema, type CreditsPeriod } from "./credits-period.js";

/** AI credits entitlements information. */
export type Ai = {
  /**
   * The quota period unit for the user's AI credits quota.
   *
   * Option descriptions:
   *  * `month` - The product has a monthly AI credits quota period.
   *  * `week` - The product has a weekly AI credits quota period.
   *  * `year` - The product has a yearly AI credits quota period.
   */
  creditsPeriod: CreditsPeriod;
  /** The number of AI credits for the user's period. */
  periodicCredits: number | null;
};

export const aiSchema: Schema<Ai> = s.object<Ai>({
  creditsPeriod: creditsPeriodSchema,
  periodicCredits: s.nullable(s.float64()),
  _keysMap: {
    creditsPeriod: "credits_period",
    periodicCredits: "periodic_credits",
  },
});
