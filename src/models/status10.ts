import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The availability of the animated thumbnail.
 *
 * Option descriptions:
 *  * `cancelled` - The animated thumbnail's creation has been cancelled.
 *  * `completed` - The animated thumbnail has been created.
 *  * `failed` - The animated thumbnail's creation has failed.
 *  * `started` - The animated thumbnail's creation has started.
 */
export const Status10 = {
  Cancelled: "cancelled",
  Completed: "completed",
  Failed: "failed",
  Started: "started",
} as const;
export type Status10 = (typeof Status10)[keyof typeof Status10] | (string & {});

export const status10Schema: EnumSchema<Status10> = s.enumOf<Status10>(Status10);
