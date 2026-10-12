import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of quota for the values of the **upload_quota.space** field.
 *
 * Option descriptions:
 *  * `lifetime` - The quota type is lifetime.
 *  * `periodic` - The quota type is periodic.
 */
export const Showing = {
  Lifetime: "lifetime",
  Periodic: "periodic",
} as const;
export type Showing = (typeof Showing)[keyof typeof Showing] | (string & {});

export const showingSchema: EnumSchema<Showing> = s.enumOf<Showing>(Showing);
