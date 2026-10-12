import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ComposerGraphics = {
  /** The timestamp in milliseconds since the Unix epoch when the item was created. */
  createdAt: number;
  /** The unique identifier of the graphic item. */
  id: string;
  /**
   * The type of the graphic item. The value of this field is always `agoraMedia` for this object.
   */
  type: string;
  /** The timestamp in milliseconds since the Unix epoch when the item was last updated. */
  updatedAt: number;
  /** The length of the video in seconds. */
  videoDuration: number;
  /** The unique identifier of the video resource. */
  videoId: number;
  /** The URL to the standard-resolution video thumbnail image. */
  videoThumb: string;
  /** The URL to the high-resolution video thumbnail image. */
  videoThumbFullSize: string;
};

export const composerGraphicsSchema: Schema<ComposerGraphics> = s.object<ComposerGraphics>({
  createdAt: s.float64(),
  id: s.string(),
  type: s.string(),
  updatedAt: s.float64(),
  videoDuration: s.float64(),
  videoId: s.float64(),
  videoThumb: s.string(),
  videoThumbFullSize: s.string(),
});
