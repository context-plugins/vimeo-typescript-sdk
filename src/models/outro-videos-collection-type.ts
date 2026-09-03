import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OutroVideosCollectionType = {
  Album: "album",
  AllVideos: "all_videos",
  Channel: "channel",
  Group: "group",
  Likes: "likes",
  UploadedVideos: "uploaded_videos",
} as const;
export type OutroVideosCollectionType =
  | (typeof OutroVideosCollectionType)[keyof typeof OutroVideosCollectionType]
  | (string & {});

export const outroVideosCollectionTypeSchema: EnumSchema<OutroVideosCollectionType> =
  s.enumOf<OutroVideosCollectionType>(OutroVideosCollectionType);
