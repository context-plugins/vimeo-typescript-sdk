import { s, type EnumSchema } from "../core/index.js";

export const AccessType = {
  Default: "default",
  Vip: "vip",
} as const;
export type AccessType = (typeof AccessType)[keyof typeof AccessType] | (string & {});

export const accessTypeSchema: EnumSchema<AccessType> = s.enumOf<AccessType>(AccessType);
