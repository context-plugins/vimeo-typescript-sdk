import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Latency = {
  FailSafe: "fail-safe",
  Low: "low",
  Standard: "standard",
} as const;
export type Latency = (typeof Latency)[keyof typeof Latency] | (string & {});

export const latencySchema: EnumSchema<Latency> = s.enumOf<Latency>(Latency);
