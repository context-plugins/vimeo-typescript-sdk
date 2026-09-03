import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VideosChaptersPicturesUidRequest = {
  active?: boolean;
};

export const videosChaptersPicturesUidRequestSchema: Schema<VideosChaptersPicturesUidRequest> =
  s.object<VideosChaptersPicturesUidRequest>({
    active: s.optional(s.boolean()),
  });
