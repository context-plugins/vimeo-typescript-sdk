import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Filter30 = {
  Video: "video",
} as const;
export type Filter30 = (typeof Filter30)[keyof typeof Filter30] | (string & {});

export const filter30Schema: EnumSchema<Filter30> = s.enumOf<Filter30>(Filter30);
