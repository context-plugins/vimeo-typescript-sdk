import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VideosAiTranscribeRequest = {
  /**
   * The language for transcription as a BCP 47 language code. When omitted, the system auto-detects
   * the spoken language from the video's audio. Use the
   * [`/videos/ai/languages?type=transcription`](#get_ai_languages) endpoint for a list of supported
   * languages.
   */
  language?: string;
};

export const videosAiTranscribeRequestSchema: Schema<VideosAiTranscribeRequest> =
  s.object<VideosAiTranscribeRequest>({
    language: s.optional(s.string()),
  });
