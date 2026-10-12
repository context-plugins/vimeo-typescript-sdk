import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { quotaPeriodSchema, type QuotaPeriod } from "./quota-period.js";

/** Bandwidth entitlement information. */
export type Bandwidth1 = {
  /** The amount of bandwidth for the user's period. */
  periodicQuota: string | null;
  /**
   * The quota period unit for the user's bandwidth quota.
   *
   * Option descriptions:
   *  * `month` - The product has a monthly bandwidth quota period.
   *  * `week` - The product has a weekly bandwidth quota period.
   *  * `year` - The product has a yearly bandwidth quota period.
   */
  quotaPeriod: QuotaPeriod;
};

export const bandwidth1Schema: Schema<Bandwidth1> = s.object<Bandwidth1>({
  periodicQuota: s.nullable(s.string()),
  quotaPeriod: quotaPeriodSchema,
  _keysMap: {
    periodicQuota: "periodic_quota",
    quotaPeriod: "quota_period",
  },
});
