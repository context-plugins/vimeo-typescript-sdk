import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Price3 = {
  usd?: number;
};

export const price3Schema: Schema<Price3> = s.object<Price3>({
  usd: s.optional(s.number()),
  _keysMap: {
    usd: "USD",
  },
});
