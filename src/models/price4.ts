import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Price4 = {
  usd?: number;
};

export const price4Schema: Schema<Price4> = s.object<Price4>({
  usd: s.optional(s.number()),
  _keysMap: {
    usd: "USD",
  },
});
