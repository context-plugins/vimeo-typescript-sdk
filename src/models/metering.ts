import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Metering = {
  secondsMax: number;
  secondsRemaining: number;
};

export const meteringSchema: Schema<Metering> = s.object<Metering>({
  secondsMax: s.number(),
  secondsRemaining: s.number(),
  _keysMap: {
    secondsMax: "seconds_max",
    secondsRemaining: "seconds_remaining",
  },
});
