import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the destination.
 *
 * Option descriptions:
 *  * `0` - The status is OK.
 *  * `1` - An error occurred. Check the `state_message` field for details.
 */
export const State = {
  _0: "0",
  _1: "1",
} as const;
export type State = (typeof State)[keyof typeof State] | (string & {});

export const stateSchema: EnumSchema<State> = s.enumOf<State>(State);
