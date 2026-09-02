import { s, type Schema } from "../core/index.js";

export type VideosVersionsRequest1 = {
  description?: string;
  isCurrent?: boolean;
};

export const videosVersionsRequest1Schema: Schema<VideosVersionsRequest1> = s.object<VideosVersionsRequest1>({
  description: s.optional(s.string()),
  isCurrent: s.optional(s.boolean()),
  _keysMap: {
    isCurrent: "is_current",
  },
});
