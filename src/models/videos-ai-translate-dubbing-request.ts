import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VideosAiTranslateDubbingRequest = {
  /**
   * The accent for the dubbed audio. Each language has its own set of available accents — use the
   * [`/videos/ai/languages?type=dubbing`](#get_ai_languages) endpoint to list them. Common values
   * include `auto` (AI-selected voice) and `original` (clones the speaker's voice, requires account
   * capability). When omitted for regional variants (e.g. `es-MX`), the default accent for that
   * variant is used. When omitted for base languages (e.g. `es`), the service selects
   * automatically.
   */
  accent?: string;
  /**
   * The target language for dubbing as a language code. Use the
   * [`/videos/ai/languages?type=dubbing`](#get_ai_languages) endpoint for a list of supported
   * languages.
   */
  language?: string;
};

export const videosAiTranslateDubbingRequestSchema: Schema<VideosAiTranslateDubbingRequest> =
  s.object<VideosAiTranslateDubbingRequest>({
    accent: s.optional(s.string()),
    language: s.optional(s.string()),
  });
