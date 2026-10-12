import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { period4Schema, type Period4 } from "./period4.js";

export type Rent1 = {
  /** Whether all the videos on the On Demand page can be rented as a whole. */
  active: boolean;
  /**
   * The rental period for the video.
   *
   * Option descriptions:
   *  * `1 day` - The rental period is one day.
   *  * `1 month` - The rental period is one month.
   *  * `1 week` - The rental period is one week.
   *  * `1 year` - The rental period is one year.
   *  * `2 day` - The rental period is two days.
   *  * `3 day` - The rental period is three days.
   *  * `3 month` - The rental period is three months.
   *  * `6 month` - The rental period is six months.
   *  * `7 day` - The rental period is seven days.
   *  * `24 hour` - The rental period is 24 hours.
   *  * `30 day` - The rental period is 30 days.
   *  * `48 hour` - The rental period is 48 hours.
   *  * `60 day` - The rental period is 60 days.
   *  * `72 hour` - The rental period is 72 hours.
   */
  period: Period4 | null;
  /** The default price to rent an episode. */
  price: number | null;
};

export const rent1Schema: Schema<Rent1> = s.object<Rent1>({
  active: s.boolean(),
  period: s.nullable(s.lazy(() => period4Schema)),
  price: s.nullable(s.float64()),
});
