import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SegmentWords = {
  endTime: number | null;
  startTime: number | null;
  word: string;
};

export const segmentWordsSchema: Schema<SegmentWords> = s.object<SegmentWords>({
  endTime: s.nullable(s.number()),
  startTime: s.nullable(s.number()),
  word: s.string(),
  _keysMap: {
    endTime: "end_time",
    startTime: "start_time",
  },
});
