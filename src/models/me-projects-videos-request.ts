import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MeProjectsVideosRequest = {
  /** When deleting clips, use Recently Deleted purgatory when true. */
  sendToRecentlyDeleted?: boolean;
  /** Whether to delete the videos when removing them from the folder. */
  shouldDeleteClips?: boolean;
  /** A comma-separated list of the video URIs to remove. */
  uris: string;
};

export const meProjectsVideosRequestSchema: Schema<MeProjectsVideosRequest> =
  s.object<MeProjectsVideosRequest>({
    sendToRecentlyDeleted: s.optional(s.boolean()),
    shouldDeleteClips: s.optional(s.boolean()),
    uris: s.string(),
    _keysMap: {
      sendToRecentlyDeleted: "send_to_recently_deleted",
      shouldDeleteClips: "should_delete_clips",
    },
  });
