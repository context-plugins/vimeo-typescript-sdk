import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersLiveEventsPicturesThumbnailIdRequest = {
  active?: boolean;
};

export const usersLiveEventsPicturesThumbnailIdRequestSchema: Schema<UsersLiveEventsPicturesThumbnailIdRequest> =
  s.object<UsersLiveEventsPicturesThumbnailIdRequest>({
    active: s.optional(s.boolean()),
  });
