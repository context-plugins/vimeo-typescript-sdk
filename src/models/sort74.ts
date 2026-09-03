import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Sort74 = {
  Alphabetical: "alphabetical",
  Date: "date",
  Duration: "duration",
  Videos: "videos",
} as const;
export type Sort74 = (typeof Sort74)[keyof typeof Sort74] | (string & {});

export const sort74Schema: EnumSchema<Sort74> = s.enumOf<Sort74>(Sort74);
