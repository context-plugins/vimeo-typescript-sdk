import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Price6 = {
  usd?: number;
};

export const price6Schema: Schema<Price6> = s.object<Price6>({
  usd: s.optional(s.number()),
  _keysMap: {
    usd: "USD",
  },
});
