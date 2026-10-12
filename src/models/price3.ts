import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Price3 = {
  /**
   * The purchase price per episode in United States dollars. This parameter is required when
   * **episodes.buy.active** is `true`.
   */
  usd?: number;
};

export const price3Schema: Schema<Price3> = s.object<Price3>({
  usd: s.optional(s.float64()),
  _keysMap: {
    usd: "USD",
  },
});
