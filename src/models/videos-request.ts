import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VideosRequest = {
  /**
   * When true, the video is placed in the Recently Deleted purgatory bucket (30-day retention).
   * When false or omitted, legacy user-delete purgatory applies.
   */
  sendToRecentlyDeleted?: boolean;
};

export const videosRequestSchema: Schema<VideosRequest> = s.object<VideosRequest>({
  sendToRecentlyDeleted: s.optional(s.boolean()),
  _keysMap: {
    sendToRecentlyDeleted: "send_to_recently_deleted",
  },
});
