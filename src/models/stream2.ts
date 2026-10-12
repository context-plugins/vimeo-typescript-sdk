import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The user's streaming access to the On Demand subscription.
 *
 * Option descriptions:
 *  * `available` - The On Demand subscription is available for streaming.
 *  * `purchased` - The On Demand subscription has been purchased.
 *  * `restricted` - Streaming for the On Demand subscription is restricted.
 *  * `unavailable` - The On Demand subscription is unavailable.
 */
export const Stream2 = {
  Available: "available",
  Purchased: "purchased",
  Restricted: "restricted",
  Unavailable: "unavailable",
} as const;
export type Stream2 = (typeof Stream2)[keyof typeof Stream2] | (string & {});

export const stream2Schema: EnumSchema<Stream2> = s.enumOf<Stream2>(Stream2);
