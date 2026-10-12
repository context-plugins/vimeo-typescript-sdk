import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The widget variant.
 *
 * Option descriptions:
 *  * `ranking` - The widget shows a ranking of options.
 *  * `thumbs` - The widget shows thumbs up/down buttons.
 */
export const Type54 = {
  Ranking: "ranking",
  Thumbs: "thumbs",
} as const;
export type Type54 = (typeof Type54)[keyof typeof Type54] | (string & {});

export const type54Schema: EnumSchema<Type54> = s.enumOf<Type54>(Type54);
