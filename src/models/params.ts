import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aiSchema, type Ai } from "./ai.js";
import { bandwidth1Schema, type Bandwidth1 } from "./bandwidth1.js";
import { seatsSchema, type Seats } from "./seats.js";
import { storageSchema, type Storage } from "./storage.js";
import { videoStorageQuotaPeriodSchema, type VideoStorageQuotaPeriod } from "./video-storage-quota-period.js";
import { videoStorageQuotaUnitSchema, type VideoStorageQuotaUnit } from "./video-storage-quota-unit.js";

/** The list of entitlement parameters corresponding to the tier. */
export type Params = {
  /** AI credits entitlements information. */
  ai: Ai;
  /** Bandwidth entitlement information. */
  bandwidth: Bandwidth1;
  /**
   * The restricted video storage limit for the tier, formatted as a human-readable byte string
   * (e.g. "1GB", "50GB", "7TB"). Null means unlimited.
   */
  restrictedVideoStorageLimit: string | null;
  /** Team seats entitlement information. */
  seats: Seats;
  /** Video storage entitlement information. */
  storage: Storage;
  /** The number of team seats included with the tier for the monthly plan. */
  teamSeats: number | null;
  /** The amount of video storage for the user's periodic quota for the annual plan. */
  videoStoragePeriodicQuota: string | null;
  /** The video storage total lifetime cap for the annual plan. */
  videoStorageQuotaCap: string | null;
  /**
   * The video storage quota period for the annual plan.
   *
   * Option descriptions:
   *  * `lifetime` - The product has a lifetime video storage quota period.
   *  * `month` - The product has a monthly video storage quota period.
   *  * `week` - The product has a weekly video storage quota period.
   *  * `year` - The product has a yearly video storage quota period.
   */
  videoStorageQuotaPeriod: VideoStorageQuotaPeriod;
  /**
   * The unit of the video storage for the user's periodic quota for the annual plan.
   *
   * Option descriptions:
   *  * `video_count` - The product has video storage based on video count.
   *  * `video_size` - The product has video storage based on video size.
   */
  videoStorageQuotaUnit: VideoStorageQuotaUnit;
};

export const paramsSchema: Schema<Params> = s.object<Params>({
  ai: aiSchema,
  bandwidth: bandwidth1Schema,
  restrictedVideoStorageLimit: s.nullable(s.string()),
  seats: seatsSchema,
  storage: storageSchema,
  teamSeats: s.nullable(s.float64()),
  videoStoragePeriodicQuota: s.nullable(s.string()),
  videoStorageQuotaCap: s.nullable(s.string()),
  videoStorageQuotaPeriod: videoStorageQuotaPeriodSchema,
  videoStorageQuotaUnit: videoStorageQuotaUnitSchema,
  _keysMap: {
    restrictedVideoStorageLimit: "restricted_video_storage_limit",
    teamSeats: "team_seats",
    videoStoragePeriodicQuota: "video_storage_periodic_quota",
    videoStorageQuotaCap: "video_storage_quota_cap",
    videoStorageQuotaPeriod: "video_storage_quota_period",
    videoStorageQuotaUnit: "video_storage_quota_unit",
  },
});
