import { s, type Schema } from "../core/index.js";

export type Price4 = {
  usd?: number;
};

export const price4Schema: Schema<Price4> = s.object<Price4>({
  usd: s.optional(s.number()),
  _keysMap: {
    usd: "USD",
  },
});
