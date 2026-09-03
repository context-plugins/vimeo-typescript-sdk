import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersAlbumsCustomThumbnailsThumbnailIdRequest = {
  active?: boolean;
};

export const usersAlbumsCustomThumbnailsThumbnailIdRequestSchema: Schema<UsersAlbumsCustomThumbnailsThumbnailIdRequest> =
  s.object<UsersAlbumsCustomThumbnailsThumbnailIdRequest>({
    active: s.optional(s.boolean()),
  });
