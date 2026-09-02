import { s, type EnumSchema } from "../core/index.js";

export const Sort46 = {
  Alphabetical: "alphabetical",
  Date: "date",
  Default: "default",
  Duration: "duration",
  FolderPath: "folder_path",
  LastUserActionEventDate: "last_user_action_event_date",
} as const;
export type Sort46 = (typeof Sort46)[keyof typeof Sort46] | (string & {});

export const sort46Schema: EnumSchema<Sort46> = s.enumOf<Sort46>(Sort46);
