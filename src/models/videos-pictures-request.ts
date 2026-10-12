import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VideosPicturesRequest = {
  /**
   * Whether the image created by the **time** field should be the default thumbnail for the video.
   */
  active?: boolean;
  /** The time offset in seconds from which to create the thumbnail. */
  time?: number;
};

export const videosPicturesRequestSchema: Schema<VideosPicturesRequest> = s.object<VideosPicturesRequest>({
  active: s.optional(s.boolean()),
  time: s.optional(s.float64()),
});
