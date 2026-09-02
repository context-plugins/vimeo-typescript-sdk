import { s, type EnumSchema } from "../core/index.js";

export const Sort18 = {
  Alphabetical: "alphabetical",
  Date: "date",
  Duration: "duration",
  LastModified: "last_modified",
  Videos: "videos",
} as const;
export type Sort18 = (typeof Sort18)[keyof typeof Sort18] | (string & {});

export const sort18Schema: EnumSchema<Sort18> = s.enumOf<Sort18>(Sort18);
