import { s, type Schema } from "../core/index.js";

export type Price3 = {
  usd?: number;
};

export const price3Schema: Schema<Price3> = s.object<Price3>({
  usd: s.optional(s.number()),
  _keysMap: {
    usd: "USD",
  },
});
