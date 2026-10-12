import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of latency.
 *
 * Option descriptions:
 *  * `fail-safe` - The latency is in the failsafe range, with a delay of 60-75 seconds.
 *  * `low` - The latency is low, with a delay of 5-7 seconds.
 *  * `standard` - The latency is standard, with a delay of 15-20 seconds.
 */
export const Latency = {
  FailSafe: "fail-safe",
  Low: "low",
  Standard: "standard",
} as const;
export type Latency = (typeof Latency)[keyof typeof Latency] | (string & {});

export const latencySchema: EnumSchema<Latency> = s.enumOf<Latency>(Latency);
