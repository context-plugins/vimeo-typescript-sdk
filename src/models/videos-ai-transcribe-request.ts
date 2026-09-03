import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VideosAiTranscribeRequest = {
  language?: string;
};

export const videosAiTranscribeRequestSchema: Schema<VideosAiTranscribeRequest> =
  s.object<VideosAiTranscribeRequest>({
    language: s.optional(s.string()),
  });
