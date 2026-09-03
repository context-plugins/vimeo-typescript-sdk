import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Quota = {
  free: number;
  hasReachedQuota: boolean;
  max: number;
  used: number;
};

export const quotaSchema: Schema<Quota> = s.object<Quota>({
  free: s.number(),
  hasReachedQuota: s.boolean(),
  max: s.number(),
  used: s.number(),
  _keysMap: {
    hasReachedQuota: "has_reached_quota",
  },
});
