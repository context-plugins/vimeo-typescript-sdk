import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AnimatedThumbnail = {
  duration: number;
  fileFormat: string;
  fileSize: number;
  height: number;
  isDownloadable: boolean;
  link: string;
  linkWithPlayButton: string;
  profileId: string;
  startTime: number;
  uuid: string;
  width: number;
};

export const animatedThumbnailSchema: Schema<AnimatedThumbnail> = s.object<AnimatedThumbnail>({
  duration: s.number(),
  fileFormat: s.string(),
  fileSize: s.number(),
  height: s.number(),
  isDownloadable: s.boolean(),
  link: s.string(),
  linkWithPlayButton: s.string(),
  profileId: s.string(),
  startTime: s.number(),
  uuid: s.string(),
  width: s.number(),
  _keysMap: {
    fileFormat: "file_format",
    fileSize: "file_size",
    isDownloadable: "is_downloadable",
    linkWithPlayButton: "link_with_play_button",
    profileId: "profile_id",
    startTime: "start_time",
  },
});
