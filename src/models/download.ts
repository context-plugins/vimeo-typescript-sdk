import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The user's download access to the On Demand video.
 *
 * Option descriptions:
 *  * `available` - The video is available for download.
 *  * `purchased` - The user has purchased the video.
 *  * `restricted` - The user isn't permitted to download the video.
 *  * `unavailable` - The video isn't available for download.
 */
export const Download = {
  Available: "available",
  Purchased: "purchased",
  Restricted: "restricted",
  Unavailable: "unavailable",
} as const;
export type Download = (typeof Download)[keyof typeof Download] | (string & {});

export const downloadSchema: EnumSchema<Download> = s.enumOf<Download>(Download);
