import { s, type EnumSchema } from "../core/index.js";

export const Period3 = {
  Lifetime: "lifetime",
  Month: "month",
  Week: "week",
  Year: "year",
} as const;
export type Period3 = (typeof Period3)[keyof typeof Period3] | (string & {});

export const period3Schema: EnumSchema<Period3> = s.enumOf<Period3>(Period3);
