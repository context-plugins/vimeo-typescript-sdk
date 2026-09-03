import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Sort41 = {
  Alphabetical: "alphabetical",
  Date: "date",
  Name: "name",
  PublishTime: "publish.time",
  Videos: "videos",
} as const;
export type Sort41 = (typeof Sort41)[keyof typeof Sort41] | (string & {});

export const sort41Schema: EnumSchema<Sort41> = s.enumOf<Sort41>(Sort41);
