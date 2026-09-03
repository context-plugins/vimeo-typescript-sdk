import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
