import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the user's learning management system learner seats quota. */
export type LmsLearnerSeatsQuota = {
  /**
   * The maximum number of learning management system learner seats granted to the authenticated
   * user.
   */
  available?: number;
  /**
   * The number of learning management system learner seats already used by the authenticated user.
   */
  used?: number;
};

export const lmsLearnerSeatsQuotaSchema: Schema<LmsLearnerSeatsQuota> = s.object<LmsLearnerSeatsQuota>({
  available: s.optional(s.float64()),
  used: s.optional(s.float64()),
});
