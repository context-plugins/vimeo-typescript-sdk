import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { period6Schema, type Period6 } from "./period6.js";
import { price5Schema, type Price5 } from "./price5.js";

export type Rent4 = {
  /**
   * Whether the video can be rented. This parameter is required when **episodes.rent.active** is
   * `true`.
   */
  active?: boolean;
  /**
   * The rental period of the video.
   *
   * Option descriptions:
   *  * `1 week` - The video can be rented for a maximum of 1 week.
   *  * `1 year` - The video can be rented for a maximum of 1 year.
   *  * `3 month` - The video can be rented for a maximum of 3 months.
   *  * `6 month` - The video can be rented for a maximum of 6 months.
   *  * `24 hour` - The video can be rented for a maximum of 24 hours.
   *  * `30 day` - The video can be rented for a maximum of 30 days.
   *  * `48 hour` - The video can be rented for a maximum of 48 hours.
   *  * `72 hour` - The video can be rented for a maximum of 72 hours.
   */
  period?: Period6;
  price?: Price5;
};

export const rent4Schema: Schema<Rent4> = s.object<Rent4>({
  active: s.optional(s.boolean()),
  period: s.optional(s.lazy(() => period6Schema)),
  price: s.optional(s.lazy(() => price5Schema)),
});
