import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The promotion access type, which is a purchase option that isn't available in the On Demand
 * container. Use the **download** and **stream_period** parameters to define additional
 * characteristics for the `vip` type.
 *
 * Option descriptions:
 *  * `default` - The promotion grants a discount on the existing purchase options for an On Demand
 *    container.
 *  * `vip` - The promotion grants free access to On Demand content before it's released.
 */
export const AccessType1 = {
  Default: "default",
  Vip: "vip",
} as const;
export type AccessType1 = (typeof AccessType1)[keyof typeof AccessType1] | (string & {});

export const accessType1Schema: EnumSchema<AccessType1> = s.enumOf<AccessType1>(AccessType1);
