import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the authenticated user's interaction to like the video. */
export type Likes3 = {
  /** Whether the authenticated user has liked the video. */
  added: boolean;
  /** The time in ISO 8601 format when the authenticated user liked the video. */
  addedTime: string;
  /** The URI for the authenticated user to like the video. */
  uri: string;
};

export const likes3Schema: Schema<Likes3> = s.object<Likes3>({
  added: s.boolean(),
  addedTime: s.string(),
  uri: s.string(),
  _keysMap: {
    addedTime: "added_time",
  },
});
