import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VideosCommentsRepliesRequest = {
  richtext?: string;
  text: string;
};

export const videosCommentsRepliesRequestSchema: Schema<VideosCommentsRepliesRequest> =
  s.object<VideosCommentsRepliesRequest>({
    richtext: s.optional(s.string()),
    text: s.string(),
  });
