import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VideosChaptersPicturesRequest = {
  /**
   * The timecode, given in seconds from the start of the video, indicating when the thumbnail
   * should be generated from the video.
   */
  timecode?: number;
};

export const videosChaptersPicturesRequestSchema: Schema<VideosChaptersPicturesRequest> =
  s.object<VideosChaptersPicturesRequest>({
    timecode: s.optional(s.float64()),
  });
