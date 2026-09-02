import { s, type EnumSchema } from "../core/index.js";

export const ReviewStatus = {
  Approved: "approved",
  InProgress: "in_progress",
  NeedsReview: "needs_review",
} as const;
export type ReviewStatus = (typeof ReviewStatus)[keyof typeof ReviewStatus] | (string & {});

export const reviewStatusSchema: EnumSchema<ReviewStatus> = s.enumOf<ReviewStatus>(ReviewStatus);
