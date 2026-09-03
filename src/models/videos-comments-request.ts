import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VideosCommentsRequest = {
  richtext?: string;
  text?: string;
};

export const videosCommentsRequestSchema: Schema<VideosCommentsRequest> = s.object<VideosCommentsRequest>({
  richtext: s.optional(s.string()),
  text: s.optional(s.string()),
});
