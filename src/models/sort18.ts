import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Sort18 = {
  Alphabetical: "alphabetical",
  Date: "date",
  Duration: "duration",
  LastModified: "last_modified",
  Videos: "videos",
} as const;
export type Sort18 = (typeof Sort18)[keyof typeof Sort18] | (string & {});

export const sort18Schema: EnumSchema<Sort18> = s.enumOf<Sort18>(Sort18);
