import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { quotaPeriod1Schema, type QuotaPeriod1 } from "./quota-period1.js";
import { quotaUnitSchema, type QuotaUnit } from "./quota-unit.js";

/** Video storage entitlement information. */
export type Storage = {
  /** The amount of video storage for the user's periodic quota for the annual plan. */
  periodicQuota: string | null;
  /** The video storage total lifetime cap for the annual plan. */
  quotaCap: string | null;
  /**
   * The video storage quota period for the annual plan.
   *
   * Option descriptions:
   *  * `lifetime` - The product has a lifetime video storage quota period.
   *  * `month` - The product has a monthly video storage quota period.
   *  * `week` - The product has a weekly video storage quota period.
   *  * `year` - The product has a yearly video storage quota period.
   */
  quotaPeriod: QuotaPeriod1;
  /**
   * The unit of the video storage for the user's periodic quota for the annual plan.
   *
   * Option descriptions:
   *  * `video_count` - The product has video storage based on video count.
   *  * `video_size` - The product has video storage based on video size.
   */
  quotaUnit: QuotaUnit;
};

export const storageSchema: Schema<Storage> = s.object<Storage>({
  periodicQuota: s.nullable(s.string()),
  quotaCap: s.nullable(s.string()),
  quotaPeriod: quotaPeriod1Schema,
  quotaUnit: quotaUnitSchema,
  _keysMap: {
    periodicQuota: "periodic_quota",
    quotaCap: "quota_cap",
    quotaPeriod: "quota_period",
    quotaUnit: "quota_unit",
  },
});
