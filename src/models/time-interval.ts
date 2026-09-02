import { s, type EnumSchema } from "../core/index.js";

export const TimeInterval = {
  Day: "day",
  Month: "month",
  None: "none",
  Week: "week",
  Year: "year",
} as const;
export type TimeInterval = (typeof TimeInterval)[keyof typeof TimeInterval] | (string & {});

export const timeIntervalSchema: EnumSchema<TimeInterval> = s.enumOf<TimeInterval>(TimeInterval);
