import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status17 = {
  Available: "available",
  Purchased: "purchased",
  Unavailable: "unavailable",
} as const;
export type Status17 = (typeof Status17)[keyof typeof Status17] | (string & {});

export const status17Schema: EnumSchema<Status17> = s.enumOf<Status17>(Status17);
