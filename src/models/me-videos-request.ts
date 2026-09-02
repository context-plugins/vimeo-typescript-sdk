import { s, type Schema } from "../core/index.js";

export type MeVideosRequest = {
  sendToRecentlyDeleted?: boolean;
};

export const meVideosRequestSchema: Schema<MeVideosRequest> = s.object<MeVideosRequest>({
  sendToRecentlyDeleted: s.optional(s.boolean()),
  _keysMap: {
    sendToRecentlyDeleted: "send_to_recently_deleted",
  },
});
