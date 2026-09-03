import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type32 = {
  Custom: "custom",
  None: "none",
  Vimeo: "vimeo",
} as const;
export type Type32 = (typeof Type32)[keyof typeof Type32] | (string & {});

export const type32Schema: EnumSchema<Type32> = s.enumOf<Type32>(Type32);
