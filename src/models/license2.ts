import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const License2 = {
  By: "by",
  ByNc: "by-nc",
  ByNcNd: "by-nc-nd",
  ByNcSa: "by-nc-sa",
  ByNd: "by-nd",
  BySa: "by-sa",
  Cc0: "cc0",
} as const;
export type License2 = (typeof License2)[keyof typeof License2] | (string & {});

export const license2Schema: EnumSchema<License2> = s.enumOf<License2>(License2);
