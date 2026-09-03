import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const License = {
  By: "by",
  ByNc: "by-nc",
  ByNcNd: "by-nc-nd",
  ByNcSa: "by-nc-sa",
  ByNd: "by-nd",
  BySa: "by-sa",
  Cc0: "cc0",
} as const;
export type License = (typeof License)[keyof typeof License] | (string & {});

export const licenseSchema: EnumSchema<License> = s.enumOf<License>(License);
