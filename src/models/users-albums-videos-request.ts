import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersAlbumsVideosRequest = {
  videos: string;
};

export const usersAlbumsVideosRequestSchema: Schema<UsersAlbumsVideosRequest> =
  s.object<UsersAlbumsVideosRequest>({
    videos: s.string(),
  });
