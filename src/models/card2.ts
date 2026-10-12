import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Card2 = {
  /** The number of seconds for which the card appears. */
  displayTime?: number;
  /** The title of the card. */
  headline?: string;
  /** The UUID of the card. */
  id?: string;
  /** The URL of the thumbnail for the card. */
  imageUrl?: string;
  /** The description of the card. */
  teaser?: string;
  /** The playback timestamp, given in seconds, when the card appears. */
  timecode?: number;
  /** The URL of the card. */
  url?: string;
};

export const card2Schema: Schema<Card2> = s.object<Card2>({
  displayTime: s.optional(s.float64()),
  headline: s.optional(s.string()),
  id: s.optional(s.string()),
  imageUrl: s.optional(s.string()),
  teaser: s.optional(s.string()),
  timecode: s.optional(s.float64()),
  url: s.optional(s.string()),
  _keysMap: {
    displayTime: "display_time",
    imageUrl: "image_url",
  },
});
