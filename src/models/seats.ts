import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { modeSchema, type Mode } from "./mode.js";

/** Team seats entitlement information. */
export type Seats = {
  /** The number of admin team seats included with the tier. */
  admin: number | null;
  /** The number of authenticated team seats included with the tier. */
  authenticated: number | null;
  /**
   * The team seats mode for the user's team.
   *
   * Option descriptions:
   *  * `admin_and_authenticated` - The mode for Enterprise-Base Platform, Enterprise-Marketing, and
   *    Enterprise-Central users.
   *  * `global` - The default mode for legacy and self-serve users.
   *  * `per_seat_type` - The mode for sales-assisted users, including Enterprise, Custom, and
   *    Custom OTT.
   */
  mode: Mode;
  /** The number of team seats included with the tier for the monthly plan. */
  team: number | null;
};

export const seatsSchema: Schema<Seats> = s.object<Seats>({
  admin: s.nullable(s.float64()),
  authenticated: s.nullable(s.float64()),
  mode: modeSchema,
  team: s.nullable(s.float64()),
});
