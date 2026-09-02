import { s, type EnumSchema } from "../core/index.js";

export const View = {
  Anybody: "anybody",
  Moderators: "moderators",
  Users: "users",
} as const;
export type View = (typeof View)[keyof typeof View] | (string & {});

export const viewSchema: EnumSchema<View> = s.enumOf<View>(View);
