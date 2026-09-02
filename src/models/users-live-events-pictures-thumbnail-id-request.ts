import { s, type Schema } from "../core/index.js";

export type UsersLiveEventsPicturesThumbnailIdRequest = {
  active?: boolean;
};

export const usersLiveEventsPicturesThumbnailIdRequestSchema: Schema<UsersLiveEventsPicturesThumbnailIdRequest> =
  s.object<UsersLiveEventsPicturesThumbnailIdRequest>({
    active: s.optional(s.boolean()),
  });
