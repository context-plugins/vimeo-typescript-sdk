import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VideosAiAskRequest = {
  /** The question to ask about the video content. Maximum 500 characters. */
  question?: string;
};

export const videosAiAskRequestSchema: Schema<VideosAiAskRequest> = s.object<VideosAiAskRequest>({
  question: s.optional(s.string()),
});
