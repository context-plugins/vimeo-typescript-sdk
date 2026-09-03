import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status14 = {
  _0: 0,
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
} as const;
export type Status14 = (typeof Status14)[keyof typeof Status14] | (number & {});

export const status14Schema: EnumSchema<Status14> = s.enumOf<Status14>(Status14);
