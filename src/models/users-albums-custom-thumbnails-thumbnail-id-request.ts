import { s, type Schema } from "../core/index.js";

export type UsersAlbumsCustomThumbnailsThumbnailIdRequest = {
  active?: boolean;
};

export const usersAlbumsCustomThumbnailsThumbnailIdRequestSchema: Schema<UsersAlbumsCustomThumbnailsThumbnailIdRequest> =
  s.object<UsersAlbumsCustomThumbnailsThumbnailIdRequest>({
    active: s.optional(s.boolean()),
  });
