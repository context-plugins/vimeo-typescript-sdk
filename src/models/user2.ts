import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pictureSchema, type Picture } from "./picture.js";

export type User2 = {
  badge: string | null;
  isStaffPicked: boolean;
  link: string;
  name: string;
  pictures: Picture;
  uri: string;
};

export const user2Schema: Schema<User2> = s.object<User2>({
  badge: s.nullable(s.string()),
  isStaffPicked: s.boolean(),
  link: s.string(),
  name: s.string(),
  pictures: pictureSchema,
  uri: s.string(),
  _keysMap: {
    isStaffPicked: "is_staff_picked",
  },
});
