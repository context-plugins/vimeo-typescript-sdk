import { s, type Schema } from "../core/index.js";

export type MeAlbumsVideosRequest = {
  videos: string;
};

export const meAlbumsVideosRequestSchema: Schema<MeAlbumsVideosRequest> = s.object<MeAlbumsVideosRequest>({
  videos: s.string(),
});
