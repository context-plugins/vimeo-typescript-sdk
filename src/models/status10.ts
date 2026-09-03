import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status10 = {
  Cancelled: "cancelled",
  Completed: "completed",
  Failed: "failed",
  Started: "started",
} as const;
export type Status10 = (typeof Status10)[keyof typeof Status10] | (string & {});

export const status10Schema: EnumSchema<Status10> = s.enumOf<Status10>(Status10);
