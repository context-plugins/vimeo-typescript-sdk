import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AccessType1 = {
  Default: "default",
  Vip: "vip",
} as const;
export type AccessType1 = (typeof AccessType1)[keyof typeof AccessType1] | (string & {});

export const accessType1Schema: EnumSchema<AccessType1> = s.enumOf<AccessType1>(AccessType1);
