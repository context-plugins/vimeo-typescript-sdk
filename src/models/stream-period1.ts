import { s, type EnumSchema } from "../core/index.js";

export const StreamPeriod1 = {
  _1Week: "1_week",
  _1Year: "1_year",
  _3Month: "3_month",
  _6Month: "6_month",
  _24Hour: "24_hour",
  _30Day: "30_day",
  _48Hour: "48_hour",
  _72Hour: "72_hour",
} as const;
export type StreamPeriod1 = (typeof StreamPeriod1)[keyof typeof StreamPeriod1] | (string & {});

export const streamPeriod1Schema: EnumSchema<StreamPeriod1> = s.enumOf<StreamPeriod1>(StreamPeriod1);
