import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type54Schema, type Type54 } from "./type54.js";

export type SentimentWidget1 = {
  /** The playback position in seconds when the widget disappears. */
  endTime?: number;
  /** The headline text shown above the widget. */
  headline?: string;
  /** The unique identifier of the sentiment widget. */
  id?: string;
  /** The playback position in seconds when the widget appears. */
  startTime?: number;
  /**
   * The widget variant.
   *
   * Option descriptions:
   *  * `ranking` - The widget shows a ranking of options.
   *  * `thumbs` - The widget shows thumbs up/down buttons.
   */
  type?: Type54;
};

export const sentimentWidget1Schema: Schema<SentimentWidget1> = s.object<SentimentWidget1>({
  endTime: s.optional(s.float64()),
  headline: s.optional(s.string()),
  id: s.optional(s.string()),
  startTime: s.optional(s.float64()),
  type: s.optional(s.lazy(() => type54Schema)),
  _keysMap: {
    endTime: "end_time",
    startTime: "start_time",
  },
});
