import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type50Schema, type Type50 } from "./type50.js";

export type SentimentWidget1 = {
  endTime?: number;
  headline?: string;
  id?: string;
  startTime?: number;
  type?: Type50;
};

export const sentimentWidget1Schema: Schema<SentimentWidget1> = s.object<SentimentWidget1>({
  endTime: s.optional(s.number()),
  headline: s.optional(s.string()),
  id: s.optional(s.string()),
  startTime: s.optional(s.number()),
  type: s.optional(s.lazy(() => type50Schema)),
  _keysMap: {
    endTime: "end_time",
    startTime: "start_time",
  },
});
