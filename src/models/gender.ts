import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The authenticated user's gender.
 *
 * Option descriptions:
 *  * `f` - The user's preferred pronouns are she and her.
 *  * `m` - The user's preferred pronouns are he and him.
 *  * `n` - The user would rather not give preferred pronouns.
 *  * `o` - The user's preferred pronouns are they and them.
 */
export const Gender = {
  F: "f",
  M: "m",
  N: "n",
  O: "o",
} as const;
export type Gender = (typeof Gender)[keyof typeof Gender] | (string & {});

export const genderSchema: EnumSchema<Gender> = s.enumOf<Gender>(Gender);
