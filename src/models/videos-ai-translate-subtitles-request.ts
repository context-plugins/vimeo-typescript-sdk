import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VideosAiTranslateSubtitlesRequest = {
  language?: string;
  texttrackId?: number;
};

export const videosAiTranslateSubtitlesRequestSchema: Schema<VideosAiTranslateSubtitlesRequest> =
  s.object<VideosAiTranslateSubtitlesRequest>({
    language: s.optional(s.string()),
    texttrackId: s.optional(s.number()),
    _keysMap: {
      texttrackId: "texttrack_id",
    },
  });
