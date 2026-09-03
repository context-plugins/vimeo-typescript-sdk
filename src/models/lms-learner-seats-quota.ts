import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LmsLearnerSeatsQuota = {
  available?: number;
  used?: number;
};

export const lmsLearnerSeatsQuotaSchema: Schema<LmsLearnerSeatsQuota> = s.object<LmsLearnerSeatsQuota>({
  available: s.optional(s.number()),
  used: s.optional(s.number()),
});
