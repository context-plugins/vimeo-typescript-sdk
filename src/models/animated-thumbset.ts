import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { animatedThumbnailSchema, type AnimatedThumbnail } from "./animated-thumbnail.js";
import { status10Schema, type Status10 } from "./status10.js";

export type AnimatedThumbset = {
  /** The URI of the video from which the sets of animated thumbnails were created. */
  clipUri: string;
  /** The time in ISO 8601 format when the GIF was created. */
  createdOn: string;
  /** An array of all the animated thumbnails in the set. */
  sizes: AnimatedThumbnail[];
  /**
   * The availability of the animated thumbnail.
   *
   * Option descriptions:
   *  * `cancelled` - The animated thumbnail's creation has been cancelled.
   *  * `completed` - The animated thumbnail has been created.
   *  * `failed` - The animated thumbnail's creation has failed.
   *  * `started` - The animated thumbnail's creation has started.
   */
  status: Status10;
  /** The URI of the set of animated thumbnails. */
  uri: string;
};

export const animatedThumbsetSchema: Schema<AnimatedThumbset> = s.object<AnimatedThumbset>({
  clipUri: s.string(),
  createdOn: s.string(),
  sizes: s.array(s.lazy(() => animatedThumbnailSchema)),
  status: status10Schema,
  uri: s.string(),
  _keysMap: {
    clipUri: "clip_uri",
    createdOn: "created_on",
  },
});
