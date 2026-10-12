import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Buy1 = {
  /** Whether all the videos on the On Demand page can be purchased as a whole. */
  active: boolean;
  /** The default price to buy an episode. */
  price: number | null;
};

export const buy1Schema: Schema<Buy1> = s.object<Buy1>({
  active: s.boolean(),
  price: s.nullable(s.float64()),
});
