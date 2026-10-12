import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Video6 = {
  /** The URI of a video to add. */
  uri?: string;
};

export const video6Schema: Schema<Video6> = s.object<Video6>({
  uri: s.optional(s.string()),
});
