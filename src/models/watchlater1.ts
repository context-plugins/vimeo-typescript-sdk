import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about whether this video appears on the user's Watch Later list. */
export type Watchlater1 = {
  /** Whether the user has added the video to their Watch Later list. */
  added: boolean;
  /** The time in ISO 8601 format when the user added the video to their Watch Later list. */
  addedTime: string;
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const watchlater1Schema: Schema<Watchlater1> = s.object<Watchlater1>({
  added: s.boolean(),
  addedTime: s.string(),
  options: s.array(s.string()),
  uri: s.string(),
  _keysMap: {
    addedTime: "added_time",
  },
});
