import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { privacy10Schema, type Privacy10 } from "./privacy10.js";
import { rating1Schema, type Rating1 } from "./rating1.js";

export type Videos18 = {
  privacy?: Privacy10;
  /**
   * An array of the user's default content ratings.
   *
   * Option descriptions:
   *  * `drugs` - The video contains drug or alcohol use.
   *  * `language` - The video contains profanity or sexually suggestive content.
   *  * `nudity` - The video contains nudity.
   *  * `safe` - The video is suitable for all audiences.
   *  * `unrated` - The video hasn't been rated.
   *  * `violence` - The video contains violent or graphic content.
   */
  rating?: Rating1;
};

export const videos18Schema: Schema<Videos18> = s.object<Videos18>({
  privacy: s.optional(s.lazy(() => privacy10Schema)),
  rating: s.optional(s.lazy(() => rating1Schema)),
});
