import { s, type EnumSchema } from "../core/index.js";

export const License4 = {
  By: "by",
  ByNc: "by-nc",
  ByNcNd: "by-nc-nd",
  ByNcSa: "by-nc-sa",
  ByNd: "by-nd",
  BySa: "by-sa",
  Cc0: "cc0",
} as const;
export type License4 = (typeof License4)[keyof typeof License4] | (string & {});

export const license4Schema: EnumSchema<License4> = s.enumOf<License4>(License4);
