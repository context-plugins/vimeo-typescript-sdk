import { s, type Schema } from "../core/index.js";

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
