import { s, type EnumSchema } from "../core/index.js";

export const AccessType1 = {
  Default: "default",
  Vip: "vip",
} as const;
export type AccessType1 = (typeof AccessType1)[keyof typeof AccessType1] | (string & {});

export const accessType1Schema: EnumSchema<AccessType1> = s.enumOf<AccessType1>(AccessType1);
