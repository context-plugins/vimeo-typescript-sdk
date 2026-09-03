import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersVideosRequest = {
  sendToRecentlyDeleted?: boolean;
};

export const usersVideosRequestSchema: Schema<UsersVideosRequest> = s.object<UsersVideosRequest>({
  sendToRecentlyDeleted: s.optional(s.boolean()),
  _keysMap: {
    sendToRecentlyDeleted: "send_to_recently_deleted",
  },
});
