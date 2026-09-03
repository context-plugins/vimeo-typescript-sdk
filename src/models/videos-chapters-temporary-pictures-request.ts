import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VideosChaptersTemporaryPicturesRequest = {
  timecode?: number;
};

export const videosChaptersTemporaryPicturesRequestSchema: Schema<VideosChaptersTemporaryPicturesRequest> =
  s.object<VideosChaptersTemporaryPicturesRequest>({
    timecode: s.optional(s.number()),
  });
