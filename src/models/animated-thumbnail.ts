import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AnimatedThumbnail = {
  /** The duration of the animated thumbnail in seconds. */
  duration: number;
  /** The file format of the animated thumbnail. */
  fileFormat: string;
  /** The file size of the animated thumbnail in bytes. */
  fileSize: number;
  /** The height of the animated thumbnail in pixels. */
  height: number;
  /** Whether the animated thumbnail can be downloaded. */
  isDownloadable: boolean;
  /** The URL of the animated thumbnail file. */
  link: string;
  /** The URL of the animated thumbnail file with a play button overlay. */
  linkWithPlayButton: string;
  /** The profile ID of the animated thumbnail. */
  profileId: string;
  /** The time in the video, in seconds, corresponding to the start of the animation. */
  startTime: number;
  /** The ID of the animated thumbnail. */
  uuid: string;
  /** The width of the animated thumbnail in pixels. */
  width: number;
};

export const animatedThumbnailSchema: Schema<AnimatedThumbnail> = s.object<AnimatedThumbnail>({
  duration: s.float64(),
  fileFormat: s.string(),
  fileSize: s.float64(),
  height: s.float64(),
  isDownloadable: s.boolean(),
  link: s.string(),
  linkWithPlayButton: s.string(),
  profileId: s.string(),
  startTime: s.float64(),
  uuid: s.string(),
  width: s.float64(),
  _keysMap: {
    fileFormat: "file_format",
    fileSize: "file_size",
    isDownloadable: "is_downloadable",
    linkWithPlayButton: "link_with_play_button",
    profileId: "profile_id",
    startTime: "start_time",
  },
});
