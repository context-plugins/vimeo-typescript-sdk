import { s, type Schema } from "../core/index.js";

export type Price6 = {
  usd?: number;
};

export const price6Schema: Schema<Price6> = s.object<Price6>({
  usd: s.optional(s.number()),
  _keysMap: {
    usd: "USD",
  },
});
