import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Card = {
  /** The number of seconds for which the card appears. */
  displayTime: number;
  /** The title of the card. */
  headline: string;
  /** The UUID of the card. */
  id: string;
  /** The URL of the thumbnail for the card. */
  imageUrl: string;
  /** The description of the card. */
  teaser: string;
  /** The playback timestamp, given in seconds, when the card appears. */
  timecode: number;
  /** The URL of the card. */
  url: string;
};

export const cardSchema: Schema<Card> = s.object<Card>({
  displayTime: s.float64(),
  headline: s.string(),
  id: s.string(),
  imageUrl: s.string(),
  teaser: s.string(),
  timecode: s.float64(),
  url: s.string(),
  _keysMap: {
    displayTime: "display_time",
    imageUrl: "image_url",
  },
});
