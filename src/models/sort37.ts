import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Sort37 = {
  Alphabetical: "alphabetical",
  Date: "date",
  Default: "default",
  Duration: "duration",
  LastUserActionEventDate: "last_user_action_event_date",
} as const;
export type Sort37 = (typeof Sort37)[keyof typeof Sort37] | (string & {});

export const sort37Schema: EnumSchema<Sort37> = s.enumOf<Sort37>(Sort37);
