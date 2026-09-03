import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ServiceName1 = {
  CustomRtmp: "custom_rtmp",
  Facebook: "facebook",
  Linkedin: "linkedin",
  Youtube: "youtube",
} as const;
export type ServiceName1 = (typeof ServiceName1)[keyof typeof ServiceName1] | (string & {});

export const serviceName1Schema: EnumSchema<ServiceName1> = s.enumOf<ServiceName1>(ServiceName1);
