import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pictureSchema, type Picture } from "./picture.js";

/** The user who deleted this video. Null if the video was moved to cold storage automatically. */
export type DeletedBy = {
  /** The display name of the user who deleted the video. */
  name: string;
  /** The portrait of the user who deleted the video. */
  pictures: Picture;
  /** The URI of the user who deleted the video. */
  uri: string;
};

export const deletedBySchema: Schema<DeletedBy> = s.object<DeletedBy>({
  name: s.string(),
  pictures: pictureSchema,
  uri: s.string(),
});
