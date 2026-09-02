import { s, type EnumSchema } from "../core/index.js";

export const Latency2 = {
  FailSafe: "fail-safe",
  Low: "low",
  Standard: "standard",
} as const;
export type Latency2 = (typeof Latency2)[keyof typeof Latency2] | (string & {});

export const latency2Schema: EnumSchema<Latency2> = s.enumOf<Latency2>(Latency2);
