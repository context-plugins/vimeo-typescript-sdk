import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VideosAiAskRequest = {
  question?: string;
};

export const videosAiAskRequestSchema: Schema<VideosAiAskRequest> = s.object<VideosAiAskRequest>({
  question: s.optional(s.string()),
});
