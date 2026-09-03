import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type15 = {
  Video: "video",
} as const;
export type Type15 = (typeof Type15)[keyof typeof Type15] | (string & {});

export const type15Schema: EnumSchema<Type15> = s.enumOf<Type15>(Type15);
