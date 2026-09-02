import { s, type Schema } from "../core/index.js";

export type VideosAiTranscribeRequest = {
  language?: string;
};

export const videosAiTranscribeRequestSchema: Schema<VideosAiTranscribeRequest> =
  s.object<VideosAiTranscribeRequest>({
    language: s.optional(s.string()),
  });
