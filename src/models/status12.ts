import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status12 = {
  _0: 0,
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
} as const;
export type Status12 = (typeof Status12)[keyof typeof Status12] | (number & {});

export const status12Schema: EnumSchema<Status12> = s.enumOf<Status12>(Status12);
