import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The service to simulcast to.
 *
 * Option descriptions:
 *  * `custom_rtmp` - Simulcast to a custom service.
 *  * `facebook` - Simulcast to Facebook Live.
 *  * `linkedin` - Simulcast to LinkedIn Live.
 *  * `youtube` - Simulcast to YouTube Live.
 */
export const ServiceName1 = {
  CustomRtmp: "custom_rtmp",
  Facebook: "facebook",
  Linkedin: "linkedin",
  Youtube: "youtube",
} as const;
export type ServiceName1 = (typeof ServiceName1)[keyof typeof ServiceName1] | (string & {});

export const serviceName1Schema: EnumSchema<ServiceName1> = s.enumOf<ServiceName1>(ServiceName1);
