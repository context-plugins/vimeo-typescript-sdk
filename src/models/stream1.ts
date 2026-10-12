import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The user's streaming access to the On Demand video.
 *
 * Option descriptions:
 *  * `available` - The video is available for streaming.
 *  * `purchased` - The user has purchased the video.
 *  * `restricted` - The user isn't permitted to stream the video.
 *  * `unavailable` - The video isn't available for streaming.
 */
export const Stream1 = {
  Available: "available",
  Purchased: "purchased",
  Restricted: "restricted",
  Unavailable: "unavailable",
} as const;
export type Stream1 = (typeof Stream1)[keyof typeof Stream1] | (string & {});

export const stream1Schema: EnumSchema<Stream1> = s.enumOf<Stream1>(Stream1);
