import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Price6 = {
  /**
   * The monthly subscription price in United States dollars. This parameter is required when
   * **rent.active** and **buy.active** are `false`.
   */
  usd?: number;
};

export const price6Schema: Schema<Price6> = s.object<Price6>({
  usd: s.optional(s.float64()),
  _keysMap: {
    usd: "USD",
  },
});
