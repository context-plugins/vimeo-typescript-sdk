import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Download = {
  Available: "available",
  Purchased: "purchased",
  Restricted: "restricted",
  Unavailable: "unavailable",
} as const;
export type Download = (typeof Download)[keyof typeof Download] | (string & {});

export const downloadSchema: EnumSchema<Download> = s.enumOf<Download>(Download);
