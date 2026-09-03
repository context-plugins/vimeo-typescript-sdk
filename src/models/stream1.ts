import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Stream1 = {
  Available: "available",
  Purchased: "purchased",
  Restricted: "restricted",
  Unavailable: "unavailable",
} as const;
export type Stream1 = (typeof Stream1)[keyof typeof Stream1] | (string & {});

export const stream1Schema: EnumSchema<Stream1> = s.enumOf<Stream1>(Stream1);
