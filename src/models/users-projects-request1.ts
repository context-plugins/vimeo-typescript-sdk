import { s, type Schema } from "../core/index.js";

export type UsersProjectsRequest1 = {
  sendToRecentlyDeleted?: boolean;
  shouldDeleteClips?: boolean;
};

export const usersProjectsRequest1Schema: Schema<UsersProjectsRequest1> = s.object<UsersProjectsRequest1>({
  sendToRecentlyDeleted: s.optional(s.boolean()),
  shouldDeleteClips: s.optional(s.boolean()),
  _keysMap: {
    sendToRecentlyDeleted: "send_to_recently_deleted",
    shouldDeleteClips: "should_delete_clips",
  },
});
