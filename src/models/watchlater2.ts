import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the authenticated user's interaction to watch the video later. */
export type Watchlater2 = {
  /** Whether the authenticated user has added the video to their Watch Later queue. */
  added: boolean;
  /**
   * The time in ISO 8601 format when the authenticated user added the video to their Watch Later
   * queue.
   */
  addedTime: string;
  /** The URI for the authenticated user to add the video to their Watch Later queue. */
  uri: string;
};

export const watchlater2Schema: Schema<Watchlater2> = s.object<Watchlater2>({
  added: s.boolean(),
  addedTime: s.string(),
  uri: s.string(),
  _keysMap: {
    addedTime: "added_time",
  },
});
