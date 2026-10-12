import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SegmentWords = {
  /** The end time of the word in milliseconds. */
  endTime: number | null;
  /** The start time of the word in milliseconds. */
  startTime: number | null;
  /** The word text. */
  word: string;
};

export const segmentWordsSchema: Schema<SegmentWords> = s.object<SegmentWords>({
  endTime: s.nullable(s.float64()),
  startTime: s.nullable(s.float64()),
  word: s.string(),
  _keysMap: {
    endTime: "end_time",
    startTime: "start_time",
  },
});
