import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Price4 = {
  /**
   * The rental price per episode in United States dollars. This parameter is applicable only when
   * **type** is `series`, and it's required when **episode.rent.active** is `true`.
   */
  usd?: number;
};

export const price4Schema: Schema<Price4> = s.object<Price4>({
  usd: s.optional(s.float64()),
  _keysMap: {
    usd: "USD",
  },
});
