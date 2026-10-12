import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of picture.
 *
 * Option descriptions:
 *  * `caution` - The picture isn't appropriate for all ages.
 *  * `custom` - The picture is a custom video image.
 *  * `default` - The picture is the default video image.
 */
export const Type = {
  Caution: "caution",
  Custom: "custom",
  Default: "default",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
