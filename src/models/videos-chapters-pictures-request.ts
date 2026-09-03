import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VideosChaptersPicturesRequest = {
  timecode?: number;
};

export const videosChaptersPicturesRequestSchema: Schema<VideosChaptersPicturesRequest> =
  s.object<VideosChaptersPicturesRequest>({
    timecode: s.optional(s.number()),
  });
