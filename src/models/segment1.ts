import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Segment1 = {
  endTime?: number;
  id?: string;
  startTime?: number;
  text?: string;
};

export const segment1Schema: Schema<Segment1> = s.object<Segment1>({
  endTime: s.optional(s.number()),
  id: s.optional(s.string()),
  startTime: s.optional(s.number()),
  text: s.optional(s.string()),
  _keysMap: {
    endTime: "end_time",
    startTime: "start_time",
  },
});
