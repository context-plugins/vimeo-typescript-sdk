import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersAlbumsVideosRequest = {
  /** A comma-separated list of video URIs corresponding to the videos to add. */
  videos: string;
};

export const usersAlbumsVideosRequestSchema: Schema<UsersAlbumsVideosRequest> =
  s.object<UsersAlbumsVideosRequest>({
    videos: s.string(),
  });
