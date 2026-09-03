import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status12 = {
  Pending: "pending",
  Ready: "ready",
  Streaming: "streaming",
  Unavailable: "unavailable",
} as const;
export type Status12 = (typeof Status12)[keyof typeof Status12] | (string & {});

export const status12Schema: EnumSchema<Status12> = s.enumOf<Status12>(Status12);
