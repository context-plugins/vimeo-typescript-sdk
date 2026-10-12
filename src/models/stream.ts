import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The user's streaming access to the On Demand video.
 *
 * Option descriptions:
 *  * `available` - The video is available for streaming.
 *  * `purchased` - The user has purchased the video.
 *  * `restricted` - The user isn't permitted to stream the video.
 *  * `unavailable` - The video isn't available for streaming
 */
export const Stream = {
  Available: "available",
  Purchased: "purchased",
  Restricted: "restricted",
  Unavailable: "unavailable",
} as const;
export type Stream = (typeof Stream)[keyof typeof Stream] | (string & {});

export const streamSchema: EnumSchema<Stream> = s.enumOf<Stream>(Stream);
