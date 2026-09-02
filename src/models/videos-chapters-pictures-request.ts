import { s, type Schema } from "../core/index.js";

export type VideosChaptersPicturesRequest = {
  timecode?: number;
};

export const videosChaptersPicturesRequestSchema: Schema<VideosChaptersPicturesRequest> =
  s.object<VideosChaptersPicturesRequest>({
    timecode: s.optional(s.number()),
  });
