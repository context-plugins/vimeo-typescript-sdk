import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The widget variant: `thumbs` or `ranking`.
 *
 * Option descriptions:
 *  * `ranking` - The widget shows a ranking of options.
 *  * `thumbs` - The widget shows thumbs up/down buttons.
 */
export const Type5 = {
  Ranking: "ranking",
  Thumbs: "thumbs",
} as const;
export type Type5 = (typeof Type5)[keyof typeof Type5] | (string & {});

export const type5Schema: EnumSchema<Type5> = s.enumOf<Type5>(Type5);
