import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status18 = {
  Accepted: "accepted",
  Pending: "pending",
} as const;
export type Status18 = (typeof Status18)[keyof typeof Status18] | (string & {});

export const status18Schema: EnumSchema<Status18> = s.enumOf<Status18>(Status18);
