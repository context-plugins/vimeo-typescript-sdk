import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Stream2 = {
  Available: "available",
  Purchased: "purchased",
  Restricted: "restricted",
  Unavailable: "unavailable",
} as const;
export type Stream2 = (typeof Stream2)[keyof typeof Stream2] | (string & {});

export const stream2Schema: EnumSchema<Stream2> = s.enumOf<Stream2>(Stream2);
