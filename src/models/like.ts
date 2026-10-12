import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about whether the user has liked this video. */
export type Like = {
  /** Whether the user has liked the video. */
  added: boolean;
  /** The time in ISO 8601 format when the user liked the video. */
  addedTime: string;
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** Whether the user can access the video's number of likes. */
  showCount: boolean;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const likeSchema: Schema<Like> = s.object<Like>({
  added: s.boolean(),
  addedTime: s.string(),
  options: s.array(s.string()),
  showCount: s.boolean(),
  uri: s.string(),
  _keysMap: {
    addedTime: "added_time",
    showCount: "show_count",
  },
});
