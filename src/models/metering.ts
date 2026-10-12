import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The metering status of the live video. */
export type Metering = {
  /** The maximum number of seconds. */
  secondsMax: number;
  /** The number of seconds remaining. */
  secondsRemaining: number;
};

export const meteringSchema: Schema<Metering> = s.object<Metering>({
  secondsMax: s.float64(),
  secondsRemaining: s.float64(),
  _keysMap: {
    secondsMax: "seconds_max",
    secondsRemaining: "seconds_remaining",
  },
});
