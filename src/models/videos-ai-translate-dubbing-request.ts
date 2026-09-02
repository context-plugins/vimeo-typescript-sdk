import { s, type Schema } from "../core/index.js";

export type VideosAiTranslateDubbingRequest = {
  accent?: string;
  language?: string;
};

export const videosAiTranslateDubbingRequestSchema: Schema<VideosAiTranslateDubbingRequest> =
  s.object<VideosAiTranslateDubbingRequest>({
    accent: s.optional(s.string()),
    language: s.optional(s.string()),
  });
