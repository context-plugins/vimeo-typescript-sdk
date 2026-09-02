import { s, type EnumSchema } from "../core/index.js";

export const ServiceName = {
  CustomRtmp: "custom_rtmp",
  Facebook: "facebook",
  Linkedin: "linkedin",
  Youtube: "youtube",
} as const;
export type ServiceName = (typeof ServiceName)[keyof typeof ServiceName] | (string & {});

export const serviceNameSchema: EnumSchema<ServiceName> = s.enumOf<ServiceName>(ServiceName);
