import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VideosCreditsRequest1 = {
  /** The name of the credited person. */
  name?: string;
  /** The role of the credited person. */
  role?: string;
};

export const videosCreditsRequest1Schema: Schema<VideosCreditsRequest1> = s.object<VideosCreditsRequest1>({
  name: s.optional(s.string()),
  role: s.optional(s.string()),
});
