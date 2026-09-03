import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Stream = {
  Available: "available",
  Purchased: "purchased",
  Restricted: "restricted",
  Unavailable: "unavailable",
} as const;
export type Stream = (typeof Stream)[keyof typeof Stream] | (string & {});

export const streamSchema: EnumSchema<Stream> = s.enumOf<Stream>(Stream);
