import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VideosRequest = {
  sendToRecentlyDeleted?: boolean;
};

export const videosRequestSchema: Schema<VideosRequest> = s.object<VideosRequest>({
  sendToRecentlyDeleted: s.optional(s.boolean()),
  _keysMap: {
    sendToRecentlyDeleted: "send_to_recently_deleted",
  },
});
