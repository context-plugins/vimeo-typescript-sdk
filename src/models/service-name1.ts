import { s, type EnumSchema } from "../core/index.js";

export const ServiceName1 = {
  CustomRtmp: "custom_rtmp",
  Facebook: "facebook",
  Linkedin: "linkedin",
  Youtube: "youtube",
} as const;
export type ServiceName1 = (typeof ServiceName1)[keyof typeof ServiceName1] | (string & {});

export const serviceName1Schema: EnumSchema<ServiceName1> = s.enumOf<ServiceName1>(ServiceName1);
