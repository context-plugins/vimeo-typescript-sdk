import { s, type Schema } from "../core/index.js";

export type VideosCommentsRepliesRequest = {
  richtext?: string;
  text: string;
};

export const videosCommentsRepliesRequestSchema: Schema<VideosCommentsRepliesRequest> =
  s.object<VideosCommentsRepliesRequest>({
    richtext: s.optional(s.string()),
    text: s.string(),
  });
