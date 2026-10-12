import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about removing this video from the user's list of watched videos. */
export type Watched = {
  /** Whether the user has watched the video. */
  added: boolean;
  /** The time in ISO 8601 format when the user watched the video. */
  addedTime: string;
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const watchedSchema: Schema<Watched> = s.object<Watched>({
  added: s.boolean(),
  addedTime: s.string(),
  options: s.array(s.string()),
  uri: s.string(),
  _keysMap: {
    addedTime: "added_time",
  },
});
