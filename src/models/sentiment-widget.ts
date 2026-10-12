import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type5Schema, type Type5 } from "./type5.js";

export type SentimentWidget = {
  /** The playback position in seconds when the widget disappears. */
  endTime: number;
  /** The headline text shown above the widget. */
  headline: string;
  /** The unique identifier of the sentiment widget. */
  id: string;
  /** The playback position in seconds when the widget appears. */
  startTime: number;
  /**
   * The widget variant: `thumbs` or `ranking`.
   *
   * Option descriptions:
   *  * `ranking` - The widget shows a ranking of options.
   *  * `thumbs` - The widget shows thumbs up/down buttons.
   */
  type: Type5;
};

export const sentimentWidgetSchema: Schema<SentimentWidget> = s.object<SentimentWidget>({
  endTime: s.float64(),
  headline: s.string(),
  id: s.string(),
  startTime: s.float64(),
  type: type5Schema,
  _keysMap: {
    endTime: "end_time",
    startTime: "start_time",
  },
});
