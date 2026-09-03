import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VideosAiTranslateDubbingRequest = {
  accent?: string;
  language?: string;
};

export const videosAiTranslateDubbingRequestSchema: Schema<VideosAiTranslateDubbingRequest> =
  s.object<VideosAiTranslateDubbingRequest>({
    accent: s.optional(s.string()),
    language: s.optional(s.string()),
  });
