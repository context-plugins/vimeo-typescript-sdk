import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VideosVersionsRequest1 = {
  /**
   * A description of the video version. This description can make use of the full unicode character
   * set.
   */
  description?: string;
  /** Whether the video version is active. */
  isCurrent?: boolean;
};

export const videosVersionsRequest1Schema: Schema<VideosVersionsRequest1> = s.object<VideosVersionsRequest1>({
  description: s.optional(s.string()),
  isCurrent: s.optional(s.boolean()),
  _keysMap: {
    isCurrent: "is_current",
  },
});
