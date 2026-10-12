import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the promotion. When **access_type** is `vip`, the value for this parameter must be
 * `batch`.
 *
 * Option descriptions:
 *  * `batch` - The promotion type that generates many random codes to use one time each.
 *  * `single` - The promotion type that generates one code to use many times.
 */
export const Type41 = {
  Batch: "batch",
  Single: "single",
} as const;
export type Type41 = (typeof Type41)[keyof typeof Type41] | (string & {});

export const type41Schema: EnumSchema<Type41> = s.enumOf<Type41>(Type41);
