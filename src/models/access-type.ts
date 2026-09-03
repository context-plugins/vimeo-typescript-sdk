import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AccessType = {
  Default: "default",
  Vip: "vip",
} as const;
export type AccessType = (typeof AccessType)[keyof typeof AccessType] | (string & {});

export const accessTypeSchema: EnumSchema<AccessType> = s.enumOf<AccessType>(AccessType);
