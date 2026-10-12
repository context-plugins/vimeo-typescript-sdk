import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of stream delay on the viewer side.
 *
 * Option descriptions:
 *  * `fail-safe` - The latency is in the failsafe range, with a delay of 60-75 seconds.
 *  * `low` - The latency is low, with a delay of 5-7 seconds.
 *  * `standard` - The latency is standard, with a delay of 15-20 seconds.
 */
export const Latency2 = {
  FailSafe: "fail-safe",
  Low: "low",
  Standard: "standard",
} as const;
export type Latency2 = (typeof Latency2)[keyof typeof Latency2] | (string & {});

export const latency2Schema: EnumSchema<Latency2> = s.enumOf<Latency2>(Latency2);
