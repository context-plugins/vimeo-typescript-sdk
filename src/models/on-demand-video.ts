import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { buy2Schema, type Buy2 } from "./buy2.js";
import { interactions13Schema, type Interactions13 } from "./interactions13.js";
import { metadata21Schema, type Metadata21 } from "./metadata21.js";
import { pictureSchema, type Picture } from "./picture.js";
import { rent2Schema, type Rent2 } from "./rent2.js";
import { type23Schema, type Type23 } from "./type23.js";
import { userSchema, type User } from "./user.js";

export type OnDemandVideo = {
  /** Information about purchasing the video. */
  buy: Buy2 | null;
  /** The description of the video. */
  description?: string;
  /** The duration of the video. */
  duration?: string;
  /** The episode number of the video. */
  episode?: number;
  /**
   * An object containing information about how the authenticated user can interact with the video's
   * On Demand page.
   */
  interactions: Interactions13;
  /** The link to the video on Vimeo. */
  link: string;
  /** Metadata information about the video. */
  metadata: Metadata21;
  /** The title of the video. */
  name?: string;
  /** An array of HTTP methods permitted on this URI. */
  options?: string[];
  /** The active picture of the video. */
  pictures?: Picture;
  /** The authenticated user's most recent play position in the video, in seconds. */
  playProgress: number;
  /** The position of the video relative to the other videos on the On Demand page. */
  position?: number;
  /** The time in ISO 8601 format when the video was created or published. */
  releaseDate?: string;
  /** The year that the video was released. */
  releaseYear: number | null;
  /** Information about renting the video. */
  rent: Rent2 | null;
  /**
   * The type of video.
   *
   * Option descriptions:
   *  * `extra` - The video is an extra feature.
   *  * `main` - The video is a main feature.
   *  * `trailer` - The video is a trailer.
   */
  type: Type23;
  /** The video container's relative URI. */
  uri: string;
  /** The owner of the video. */
  user?: User;
};

export const onDemandVideoSchema: Schema<OnDemandVideo> = s.object<OnDemandVideo>({
  buy: s.nullable(s.lazy(() => buy2Schema)),
  description: s.optional(s.string()),
  duration: s.optional(s.string()),
  episode: s.optional(s.float64()),
  interactions: interactions13Schema,
  link: s.string(),
  metadata: metadata21Schema,
  name: s.optional(s.string()),
  options: s.optional(s.array(s.string())),
  pictures: s.optional(s.lazy(() => pictureSchema)),
  playProgress: s.float64(),
  position: s.optional(s.float64()),
  releaseDate: s.optional(s.string()),
  releaseYear: s.nullable(s.float64()),
  rent: s.nullable(s.lazy(() => rent2Schema)),
  type: type23Schema,
  uri: s.string(),
  user: s.optional(s.lazy(() => userSchema)),
  _keysMap: {
    playProgress: "play_progress",
    releaseDate: "release_date",
    releaseYear: "release_year",
  },
});
