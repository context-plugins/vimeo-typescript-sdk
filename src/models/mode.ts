import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The team seats mode for the user's team.
 *
 * Option descriptions:
 *  * `admin_and_authenticated` - The mode for Enterprise-Base Platform, Enterprise-Marketing, and
 *    Enterprise-Central users.
 *  * `global` - The default mode for legacy and self-serve users.
 *  * `per_seat_type` - The mode for sales-assisted users, including Enterprise, Custom, and Custom
 *    OTT.
 */
export const Mode = {
  AdminAndAuthenticated: "admin_and_authenticated",
  Global: "global",
  PerSeatType: "per_seat_type",
} as const;
export type Mode = (typeof Mode)[keyof typeof Mode] | (string & {});

export const modeSchema: EnumSchema<Mode> = s.enumOf<Mode>(Mode);
