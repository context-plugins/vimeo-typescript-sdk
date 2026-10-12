import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { codec1Schema, type Codec1 } from "./codec1.js";
import { rendition1Schema, type Rendition1 } from "./rendition1.js";
import { type6Schema, type Type6 } from "./type6.js";

export type Progressive = {
  /**
   * The codec of the video file.
   *
   * Option descriptions:
   *  * `AV1` - The codec is AV1.
   *  * `H264` - The codec is H264.
   *  * `HEVC` - The codec is HEVC.
   */
  codec: Codec1 | null;
  /** The time in ISO 8601 format when the video file was created. */
  createdTime: string;
  /** The frames per second of the video. */
  fps: number;
  /** The height of the video in pixels. */
  height: number | null;
  /** The direct link to the video file. */
  link: string;
  /** The time in ISO 8601 format when the link to the video file expires. */
  linkExpirationTime: string;
  /** The URLs for logging events. */
  log?: Record<string, unknown>;
  /** The MD5 hash of the video file. */
  md5: string;
  /**
   * The video rendition.
   *
   * Option descriptions:
   *  * `2k` - The video has 2K resolution.
   *  * `4k` - The video has 4K resolution.
   *  * `5k` - The video has 5K resolution.
   *  * `6k` - The video has 6K resolution.
   *  * `7k` - The video has 7K resolution.
   *  * `8k` - The video has 8K resolution.
   *  * `240p` - The video has 240p resolution.
   *  * `360p` - The video has 360p resolution.
   *  * `480p` - The video has 480p resolution.
   *  * `540p` - The video has 540p resolution.
   *  * `720p` - The video has 720p resolution.
   *  * `1080p` - The video has 1080p resolution.
   */
  rendition: Rendition1;
  /** The size in bytes of the video file. */
  size: number | null;
  /**
   * The type of video file.
   *
   * Option descriptions:
   *  * `source` - The video file is a source file.
   *  * `video/mp4` - The video file is in MP4 format.
   *  * `video/webm` - The video file is in WebM format.
   *  * `vp6/x-video` - The video file is in VP6 format.
   */
  type: Type6 | null;
  /** The width of the video in pixels. */
  width: number | null;
};

export const progressiveSchema: Schema<Progressive> = s.object<Progressive>({
  codec: s.nullable(s.lazy(() => codec1Schema)),
  createdTime: s.string(),
  fps: s.float64(),
  height: s.nullable(s.float64()),
  link: s.string(),
  linkExpirationTime: s.string(),
  log: s.optional(s.record(s.string(), s.unknown())),
  md5: s.string(),
  rendition: rendition1Schema,
  size: s.nullable(s.float64()),
  type: s.nullable(s.lazy(() => type6Schema)),
  width: s.nullable(s.float64()),
  _keysMap: {
    createdTime: "created_time",
    linkExpirationTime: "link_expiration_time",
  },
});
