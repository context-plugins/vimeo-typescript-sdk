import { s, type Schema } from "../core/index.js";

export type VideosChaptersPicturesUidRequest = {
  active?: boolean;
};

export const videosChaptersPicturesUidRequestSchema: Schema<VideosChaptersPicturesUidRequest> =
  s.object<VideosChaptersPicturesUidRequest>({
    active: s.optional(s.boolean()),
  });
