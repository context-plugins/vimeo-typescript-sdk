import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Video metadata information. */
export type Video4 = {
  /** The raw video codec of the source file. */
  codec: string;
  /**
   * A human-readable version of the video codec name, such as `MP4`, `WebM`, or `MOV`, or the raw
   * codec value, depending on the codec.
   */
  displayCodec: string;
  /** The frames per second of the source video. */
  fps: number | null;
  /** The height of the source video in pixels. */
  height: number;
  /** The spatial projection type of the source video. */
  projection: string;
  /** The stereo mode of the source video. */
  stereoMode: string;
  /** The width of the source video in pixels. */
  width: number;
};

export const video4Schema: Schema<Video4> = s.object<Video4>({
  codec: s.string(),
  displayCodec: s.string(),
  fps: s.nullable(s.float64()),
  height: s.float64(),
  projection: s.string(),
  stereoMode: s.string(),
  width: s.float64(),
  _keysMap: {
    displayCodec: "display_codec",
    stereoMode: "stereo_mode",
  },
});
