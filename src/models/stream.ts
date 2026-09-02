import { s, type EnumSchema } from "../core/index.js";

export const Stream = {
  Available: "available",
  Purchased: "purchased",
  Restricted: "restricted",
  Unavailable: "unavailable",
} as const;
export type Stream = (typeof Stream)[keyof typeof Stream] | (string & {});

export const streamSchema: EnumSchema<Stream> = s.enumOf<Stream>(Stream);
