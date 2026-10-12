import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the event.
 *
 * Option descriptions:
 *  * `ended` - The user ended the event.
 *  * `started` - The user started the event.
 */
export const Status13 = {
  Ended: "ended",
  Started: "started",
} as const;
export type Status13 = (typeof Status13)[keyof typeof Status13] | (string & {});

export const status13Schema: EnumSchema<Status13> = s.enumOf<Status13>(Status13);
