import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of access that the promotion grants.
 *
 * Option descriptions:
 *  * `default` - The promotion grants discounts on existing product offerings.
 *  * `vip` - The promotion grants free access to On Demand content before it's released, or to
 *    access types that aren't part of the existing product offerings.
 */
export const AccessType = {
  Default: "default",
  Vip: "vip",
} as const;
export type AccessType = (typeof AccessType)[keyof typeof AccessType] | (string & {});

export const accessTypeSchema: EnumSchema<AccessType> = s.enumOf<AccessType>(AccessType);
