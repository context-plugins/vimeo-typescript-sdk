import { s, type Schema } from "../core/index.js";

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
