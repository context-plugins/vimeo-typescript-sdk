import { s, type EnumSchema } from "../core/index.js";

export const Period2 = {
  Lifetime: "lifetime",
  Year: "year",
} as const;
export type Period2 = (typeof Period2)[keyof typeof Period2] | (string & {});

export const period2Schema: EnumSchema<Period2> = s.enumOf<Period2>(Period2);
