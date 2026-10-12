import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the On Demand page.
 *
 * Option descriptions:
 *  * `film` - The On Demand page is a film.
 *  * `series` - The On Demand page is a series.
 */
export const Type37 = {
  Film: "film",
  Series: "series",
} as const;
export type Type37 = (typeof Type37)[keyof typeof Type37] | (string & {});

export const type37Schema: EnumSchema<Type37> = s.enumOf<Type37>(Type37);
