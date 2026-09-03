import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aiSchema, type Ai } from "./ai.js";
import { bandwidth1Schema, type Bandwidth1 } from "./bandwidth1.js";
import { seatsSchema, type Seats } from "./seats.js";
import { storageSchema, type Storage } from "./storage.js";
import { videoStorageQuotaPeriodSchema, type VideoStorageQuotaPeriod } from "./video-storage-quota-period.js";
import { videoStorageQuotaUnitSchema, type VideoStorageQuotaUnit } from "./video-storage-quota-unit.js";

export type Params = {
  ai: Ai;
  bandwidth: Bandwidth1;
  restrictedVideoStorageLimit: string | null;
  seats: Seats;
  storage: Storage;
  teamSeats: number | null;
  videoStoragePeriodicQuota: string | null;
  videoStorageQuotaCap: string | null;
  videoStorageQuotaPeriod: VideoStorageQuotaPeriod;
  videoStorageQuotaUnit: VideoStorageQuotaUnit;
};

export const paramsSchema: Schema<Params> = s.object<Params>({
  ai: aiSchema,
  bandwidth: bandwidth1Schema,
  restrictedVideoStorageLimit: s.nullable(s.string()),
  seats: seatsSchema,
  storage: storageSchema,
  teamSeats: s.nullable(s.number()),
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
