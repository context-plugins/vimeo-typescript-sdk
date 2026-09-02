import { s, type EnumSchema } from "../core/index.js";

export const Sort39 = {
  Alphabetical: "alphabetical",
  Date: "date",
  Default: "default",
  Duration: "duration",
  LastUserActionEventDate: "last_user_action_event_date",
  Likes: "likes",
  ModifiedTime: "modified_time",
  Plays: "plays",
} as const;
export type Sort39 = (typeof Sort39)[keyof typeof Sort39] | (string & {});

export const sort39Schema: EnumSchema<Sort39> = s.enumOf<Sort39>(Sort39);
