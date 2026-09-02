import { s, type Schema } from "../core/index.js";

export type PublicVideos = {
  total: number;
};

export const publicVideosSchema: Schema<PublicVideos> = s.object<PublicVideos>({
  total: s.number(),
});
