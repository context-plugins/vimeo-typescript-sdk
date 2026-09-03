import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SetContentRating = {
  contentRating: string[];
  options: string[];
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
