import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AudioTrackQuota = {
  free: number;
  hasReachedQuota: boolean;
  max: number;
  used: number;
};

export const audioTrackQuotaSchema: Schema<AudioTrackQuota> = s.object<AudioTrackQuota>({
  free: s.number(),
  hasReachedQuota: s.boolean(),
  max: s.number(),
  used: s.number(),
  _keysMap: {
    hasReachedQuota: "has_reached_quota",
  },
});
