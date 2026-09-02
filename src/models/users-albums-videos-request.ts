import { s, type Schema } from "../core/index.js";

export type UsersAlbumsVideosRequest = {
  videos: string;
};

export const usersAlbumsVideosRequestSchema: Schema<UsersAlbumsVideosRequest> =
  s.object<UsersAlbumsVideosRequest>({
    videos: s.string(),
  });
