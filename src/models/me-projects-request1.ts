import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MeProjectsRequest1 = {
  /**
   * When true and should_delete_clips is true, deleted videos use the Recently Deleted purgatory
   * bucket (30-day retention).
   */
  sendToRecentlyDeleted?: boolean;
  /** Whether to delete all the videos in the folder along with the folder itself. */
  shouldDeleteClips?: boolean;
};

export const meProjectsRequest1Schema: Schema<MeProjectsRequest1> = s.object<MeProjectsRequest1>({
  sendToRecentlyDeleted: s.optional(s.boolean()),
  shouldDeleteClips: s.optional(s.boolean()),
  _keysMap: {
    sendToRecentlyDeleted: "send_to_recently_deleted",
    shouldDeleteClips: "should_delete_clips",
  },
});
