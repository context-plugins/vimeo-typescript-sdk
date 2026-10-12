import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersAlbumsCustomThumbnailsThumbnailIdRequest = {
  /** Whether to make this image the active custom showcase thumbnail. */
  active?: boolean;
};

export const usersAlbumsCustomThumbnailsThumbnailIdRequestSchema: Schema<UsersAlbumsCustomThumbnailsThumbnailIdRequest> =
  s.object<UsersAlbumsCustomThumbnailsThumbnailIdRequest>({
    active: s.optional(s.boolean()),
  });
