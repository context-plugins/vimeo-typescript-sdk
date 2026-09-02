import { s, type Schema } from "../core/index.js";

export type LmsLearnerSeatsQuota = {
  available?: number;
  used?: number;
};

export const lmsLearnerSeatsQuotaSchema: Schema<LmsLearnerSeatsQuota> = s.object<LmsLearnerSeatsQuota>({
  available: s.optional(s.number()),
  used: s.optional(s.number()),
});
