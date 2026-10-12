import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The source of the video collection that appears in the area for more videos.
 *
 * Option descriptions:
 *  * `album` - The video collection source is a user showcase.
 *  * `all_videos` - The video collection source is all user videos.
 *  * `channel` - The video collection source is a user channel.
 *  * `group` - The video collection source is a user group.
 *  * `likes` - The video collection source is user likes.
 *  * `uploaded_videos` - The video collection source is user uploads.
 */
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
