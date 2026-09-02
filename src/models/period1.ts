import { s, type EnumSchema } from "../core/index.js";

export const Period1 = {
  CalendarMonth: "calendar_month",
  Year: "year",
} as const;
export type Period1 = (typeof Period1)[keyof typeof Period1] | (string & {});

export const period1Schema: EnumSchema<Period1> = s.enumOf<Period1>(Period1);
