import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type5Schema, type Type5 } from "./type5.js";

export type SentimentWidget = {
  endTime: number;
  headline: string;
  id: string;
  startTime: number;
  type: Type5;
};

export const sentimentWidgetSchema: Schema<SentimentWidget> = s.object<SentimentWidget>({
  endTime: s.number(),
  headline: s.string(),
  id: s.string(),
  startTime: s.number(),
  type: type5Schema,
  _keysMap: {
    endTime: "end_time",
    startTime: "start_time",
  },
});
