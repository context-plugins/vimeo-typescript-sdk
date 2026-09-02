import { s, type EnumSchema } from "../core/index.js";

export const Download = {
  Available: "available",
  Purchased: "purchased",
  Restricted: "restricted",
  Unavailable: "unavailable",
} as const;
export type Download = (typeof Download)[keyof typeof Download] | (string & {});

export const downloadSchema: EnumSchema<Download> = s.enumOf<Download>(Download);
