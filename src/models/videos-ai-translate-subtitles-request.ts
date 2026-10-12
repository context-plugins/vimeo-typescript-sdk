import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VideosAiTranslateSubtitlesRequest = {
  /**
   * The target language for translation as a language code. Use the
   * [`/videos/ai/languages?type=subtitling`](#get_ai_languages) endpoint for a list of supported
   * languages.
   */
  language?: string;
  /**
   * The ID of the text track to use as the translation source. When omitted, the system uses the
   * video's primary transcript. Use `GET /videos/{video_id}/texttracks` to list available text
   * tracks.
   */
  texttrackId?: number;
};

export const videosAiTranslateSubtitlesRequestSchema: Schema<VideosAiTranslateSubtitlesRequest> =
  s.object<VideosAiTranslateSubtitlesRequest>({
    language: s.optional(s.string()),
    texttrackId: s.optional(s.float64()),
    _keysMap: {
      texttrackId: "texttrack_id",
    },
  });
