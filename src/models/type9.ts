import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the On Demand page.
 *
 * Option descriptions:
 *  * `film` - The On Demand page is for a film.
 *  * `series` - The On Demand page is for a series.
 */
export const Type9 = {
  Film: "film",
  Series: "series",
} as const;
export type Type9 = (typeof Type9)[keyof typeof Type9] | (string & {});

export const type9Schema: EnumSchema<Type9> = s.enumOf<Type9>(Type9);
