import { s, type EnumSchema } from "../core/index.js";

export const License1 = {
  By: "by",
  ByNc: "by-nc",
  ByNcNd: "by-nc-nd",
  ByNcSa: "by-nc-sa",
  ByNd: "by-nd",
  BySa: "by-sa",
  Cc0: "cc0",
} as const;
export type License1 = (typeof License1)[keyof typeof License1] | (string & {});

export const license1Schema: EnumSchema<License1> = s.enumOf<License1>(License1);
