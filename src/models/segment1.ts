import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Segment1 = {
  /**
   * The end time in milliseconds. Must be non-negative. Cannot overlap with the next segment's
   * start time.
   */
  endTime?: number;
  /** The segment UUID. */
  id?: string;
  /**
   * The start time in milliseconds. Must be non-negative and less than `end_time`. Cannot overlap
   * with the previous segment's end time.
   */
  startTime?: number;
  /** The updated text for the segment. Required for text edits; omit for timestamp-only changes. */
  text?: string;
};

export const segment1Schema: Schema<Segment1> = s.object<Segment1>({
  endTime: s.optional(s.float64()),
  id: s.optional(s.string()),
  startTime: s.optional(s.float64()),
  text: s.optional(s.string()),
  _keysMap: {
    endTime: "end_time",
    startTime: "start_time",
  },
});
