import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The review status of the video.
 *
 * Option descriptions:
 *  * `approved` - The video review was approved.
 *  * `in_progress` - The video review is in progress.
 *  * `needs_review` - The video needs to be reviewed.
 */
export const ReviewStatus = {
  Approved: "approved",
  InProgress: "in_progress",
  NeedsReview: "needs_review",
} as const;
export type ReviewStatus = (typeof ReviewStatus)[keyof typeof ReviewStatus] | (string & {});

export const reviewStatusSchema: EnumSchema<ReviewStatus> = s.enumOf<ReviewStatus>(ReviewStatus);
