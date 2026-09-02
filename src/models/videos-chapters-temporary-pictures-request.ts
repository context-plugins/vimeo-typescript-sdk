import { s, type Schema } from "../core/index.js";

export type VideosChaptersTemporaryPicturesRequest = {
  timecode?: number;
};

export const videosChaptersTemporaryPicturesRequestSchema: Schema<VideosChaptersTemporaryPicturesRequest> =
  s.object<VideosChaptersTemporaryPicturesRequest>({
    timecode: s.optional(s.number()),
  });
