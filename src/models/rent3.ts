import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { period5Schema, type Period5 } from "./period5.js";
import { price4Schema, type Price4 } from "./price4.js";

export type Rent3 = {
  /** Whether episodes can be rented. */
  active?: boolean;
  /**
   * The rental period of the episode.
   *
   * Option descriptions:
   *  * `1 week` - The episode can be rented for a maximum of 1 week.
   *  * `1 year` - The episode can be rented for a maximum of 1 year.
   *  * `3 month` - The episode can be rented for a maximum of 3 months.
   *  * `6 month` - The episode can be rented for a maximum of 6 months.
   *  * `24 hour` - The episode can be rented for a maximum of 24 hours.
   *  * `30 day` - The episode can be rented for a maximum of 30 days.
   *  * `48 hour` - The episode can be rented for a maximum of 48 hours.
   *  * `72 hour` - The episode can be rented for a maximum of 72 hours.
   */
  period?: Period5;
  price?: Price4;
};

export const rent3Schema: Schema<Rent3> = s.object<Rent3>({
  active: s.optional(s.boolean()),
  period: s.optional(s.lazy(() => period5Schema)),
  price: s.optional(s.lazy(() => price4Schema)),
});
