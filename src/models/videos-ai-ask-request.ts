import { s, type Schema } from "../core/index.js";

export type VideosAiAskRequest = {
  question?: string;
};

export const videosAiAskRequestSchema: Schema<VideosAiAskRequest> = s.object<VideosAiAskRequest>({
  question: s.optional(s.string()),
});
