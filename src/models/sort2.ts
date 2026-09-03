import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Sort2 = {
  Alphabetical: "alphabetical",
  Comments: "comments",
  Date: "date",
  Default: "default",
  Duration: "duration",
  LastUserActionEventDate: "last_user_action_event_date",
  Likes: "likes",
  ModifiedTime: "modified_time",
  Plays: "plays",
} as const;
export type Sort2 = (typeof Sort2)[keyof typeof Sort2] | (string & {});

export const sort2Schema: EnumSchema<Sort2> = s.enumOf<Sort2>(Sort2);
