import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The name of the destination service.
 *
 * Option descriptions:
 *  * `custom_rtmp` - The destination service is custom RTMP.
 *  * `facebook` - The destination service is Facebook Live.
 *  * `linkedin` - The destination service is LinkedIn Live.
 *  * `youtube` - The destination service is YouTube Live.
 */
export const ServiceName = {
  CustomRtmp: "custom_rtmp",
  Facebook: "facebook",
  Linkedin: "linkedin",
  Youtube: "youtube",
} as const;
export type ServiceName = (typeof ServiceName)[keyof typeof ServiceName] | (string & {});

export const serviceNameSchema: EnumSchema<ServiceName> = s.enumOf<ServiceName>(ServiceName);
