import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about setting a content rating for the video. */
export type SetContentRating = {
  /** A list of valid content rating flags for the video. */
  contentRating: string[];
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const setContentRatingSchema: Schema<SetContentRating> = s.object<SetContentRating>({
  contentRating: s.array(s.string()),
  options: s.array(s.string()),
  uri: s.string(),
  _keysMap: {
    contentRating: "content_rating",
  },
});
