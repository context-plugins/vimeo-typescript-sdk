import { s, type EnumSchema } from "../core/index.js";

export const Latency = {
  FailSafe: "fail-safe",
  Low: "low",
  Standard: "standard",
} as const;
export type Latency = (typeof Latency)[keyof typeof Latency] | (string & {});

export const latencySchema: EnumSchema<Latency> = s.enumOf<Latency>(Latency);
