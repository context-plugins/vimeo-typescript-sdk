import { s, type Schema } from "../core/index.js";

export type VideosRequest = {
  sendToRecentlyDeleted?: boolean;
};

export const videosRequestSchema: Schema<VideosRequest> = s.object<VideosRequest>({
  sendToRecentlyDeleted: s.optional(s.boolean()),
  _keysMap: {
    sendToRecentlyDeleted: "send_to_recently_deleted",
  },
});
