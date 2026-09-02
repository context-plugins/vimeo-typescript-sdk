import { s, type Schema } from "../core/index.js";

export type VideosCommentsRequest = {
  richtext?: string;
  text?: string;
};

export const videosCommentsRequestSchema: Schema<VideosCommentsRequest> = s.object<VideosCommentsRequest>({
  richtext: s.optional(s.string()),
  text: s.optional(s.string()),
});
