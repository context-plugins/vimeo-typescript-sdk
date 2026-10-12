import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { codecSchema, type Codec } from "./codec.js";
import { logSchema, type Log } from "./log.js";
import { qualitySchema, type Quality } from "./quality.js";
import { renditionSchema, type Rendition } from "./rendition.js";
import { type3Schema, type Type3 } from "./type3.js";

export type VideoFile = {
  /**
   * The codec of the video file.
   *
   * Option descriptions:
   *  * `AV1` - The codec is AV1.
   *  * `H264` - The codec is H264.
   *  * `HEVC` - The codec is HEVC.
   *  * `aac` - The audio codec is AAC.
   */
  codec: Codec | null;
  /** The time in ISO 8601 format when the video file was created. */
  createdTime: string;
  /** The time in ISO 8601 format when the video file expires. */
  expires?: string;
  /** The frames per second of the video. Returns 0 for audio-only files. */
  fps: number;
  /** The height of the video in pixels. */
  height: number;
  /** The direct link to the video file. */
  link: string;
  log?: Log;
  /** The MD5 hash of the video file. */
  md5: string;
  /** The public name of the video file. */
  publicName: string;
  /**
   * The video quality as determined by height and width.
   *
   * Option descriptions:
   *  * `audio` - The file is audio-only.
   *  * `hd` - The video is in high definition.
   *  * `hls` - The video is suitable for HTTP live streaming.
   *  * `mobile` - The video is mobile quality.
   *  * `sd` - The video is in standard definition.
   *  * `source` - The video's source file.
   *  * `uhd` - The video resolution is 2K or higher.
   */
  quality: Quality;
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
   *  * `adaptive` - The video rendition is adaptive (for example, HLS or DASH).
   *  * `audio` - The file is audio-only.
   *  * `source` - The video is the source file.
   */
  rendition: Rendition;
  /** The approximate size in bytes of the video file. */
  size: number;
  /** The converted size of the video file rounded to two decimal places. */
  sizeShort: string;
  /** The source link of the video file. */
  sourceLink?: string;
  /**
   * The type of video file.
   *
   * Option descriptions:
   *  * `audio/mp4` - The file is an audio-only MPEG-4 container.
   *  * `source` - The video file is a source file.
   *  * `video/mp4` - The video file is in MP4 format.
   *  * `video/webm` - The video file is in WebM format.
   *  * `vp6/x-video` - The video file is in VP6 format.
   */
  type: Type3 | null;
  /** The width of the video in pixels. */
  width: number;
};

export const videoFileSchema: Schema<VideoFile> = s.object<VideoFile>({
  codec: s.nullable(s.lazy(() => codecSchema)),
  createdTime: s.string(),
  expires: s.optional(s.string()),
  fps: s.float64(),
  height: s.float64(),
  link: s.string(),
  log: s.optional(s.lazy(() => logSchema)),
  md5: s.string(),
  publicName: s.string(),
  quality: qualitySchema,
  rendition: renditionSchema,
  size: s.float64(),
  sizeShort: s.string(),
  sourceLink: s.optional(s.string()),
  type: s.nullable(s.lazy(() => type3Schema)),
  width: s.float64(),
  _keysMap: {
    createdTime: "created_time",
    publicName: "public_name",
    sizeShort: "size_short",
    sourceLink: "source_link",
  },
});
