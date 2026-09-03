import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  outroVideosCollectionTypeSchema,
  type OutroVideosCollectionType,
} from "./outro-videos-collection-type.js";
import { pictureSchema, type Picture } from "./picture.js";

export type Videos15 = {
  outroVideosCollectionType?: OutroVideosCollectionType | null;
  outroVideosCollectionUri?: string | null;
  picture?: Picture | null;
  pictureUri?: string | null;
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
