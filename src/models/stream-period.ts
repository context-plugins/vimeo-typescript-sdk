import { s, type EnumSchema } from "../core/index.js";

export const StreamPeriod = {
  _1Week: "1_week",
  _1Year: "1_year",
  _3Month: "3_month",
  _6Month: "6_month",
  _24Hour: "24_hour",
  _30Days: "30_days",
  _48Hour: "48_hour",
  _72Hour: "72_hour",
} as const;
export type StreamPeriod = (typeof StreamPeriod)[keyof typeof StreamPeriod] | (string & {});

export const streamPeriodSchema: EnumSchema<StreamPeriod> = s.enumOf<StreamPeriod>(StreamPeriod);
