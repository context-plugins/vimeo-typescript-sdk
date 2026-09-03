import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type28 = {
  Custom: "custom",
  None: "none",
  Vimeo: "vimeo",
} as const;
export type Type28 = (typeof Type28)[keyof typeof Type28] | (string & {});

export const type28Schema: EnumSchema<Type28> = s.enumOf<Type28>(Type28);
