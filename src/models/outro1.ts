import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * What to do with the outro.
 *
 * Option descriptions:
 *  * `nothing` - Disable the outro.
 */
export const Outro1 = {
  Nothing: "nothing",
} as const;
export type Outro1 = (typeof Outro1)[keyof typeof Outro1] | (string & {});

export const outro1Schema: EnumSchema<Outro1> = s.enumOf<Outro1>(Outro1);
