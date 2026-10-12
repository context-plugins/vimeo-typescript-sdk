import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the authenticated user's trial.
 *
 * Option descriptions:
 *  * `free_trial` - The user is currently in a free trial.
 */
export const Status1 = {
  FreeTrial: "free_trial",
} as const;
export type Status1 = (typeof Status1)[keyof typeof Status1] | (string & {});

export const status1Schema: EnumSchema<Status1> = s.enumOf<Status1>(Status1);
