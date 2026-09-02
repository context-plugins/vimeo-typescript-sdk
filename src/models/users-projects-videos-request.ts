import { s, type Schema } from "../core/index.js";

export type UsersProjectsVideosRequest = {
  sendToRecentlyDeleted?: boolean;
  shouldDeleteClips?: boolean;
  uris: string;
};

export const usersProjectsVideosRequestSchema: Schema<UsersProjectsVideosRequest> =
  s.object<UsersProjectsVideosRequest>({
    sendToRecentlyDeleted: s.optional(s.boolean()),
    shouldDeleteClips: s.optional(s.boolean()),
    uris: s.string(),
    _keysMap: {
      sendToRecentlyDeleted: "send_to_recently_deleted",
      shouldDeleteClips: "should_delete_clips",
    },
  });
