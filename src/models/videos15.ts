import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  outroVideosCollectionTypeSchema,
  type OutroVideosCollectionType,
} from "./outro-videos-collection-type.js";
import { pictureSchema, type Picture } from "./picture.js";

/** The additional videos that are offered after the main video ends. */
export type Videos15 = {
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
  outroVideosCollectionType?: OutroVideosCollectionType | null;
  /**
   * The URI of the video collection that appears in the area for more videos when the value of
   * **videos.outro_videos_collection_type** is `album`.
   */
  outroVideosCollectionUri?: string | null;
  /** The background image to display in the area for more videos. */
  picture?: Picture | null;
  /** The URI of the background image that appears in the area for more videos. */
  pictureUri?: string | null;
  /**
   * The URIs of the videos when the value of **videos.outro_videos_collection_type** is
   * `uploaded_videos`.
   */
  videoUris?: string[];
};

export const videos15Schema: Schema<Videos15> = s.object<Videos15>({
  outroVideosCollectionType: s.optionalNullable(s.lazy(() => outroVideosCollectionTypeSchema)),
  outroVideosCollectionUri: s.optionalNullable(s.string()),
  picture: s.optionalNullable(s.lazy(() => pictureSchema)),
  pictureUri: s.optionalNullable(s.string()),
  videoUris: s.optional(s.array(s.string())),
  _keysMap: {
    outroVideosCollectionType: "outro_videos_collection_type",
    outroVideosCollectionUri: "outro_videos_collection_uri",
    pictureUri: "picture_uri",
    videoUris: "video_uris",
  },
});
