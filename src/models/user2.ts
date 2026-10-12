import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pictureSchema, type Picture } from "./picture.js";

/** Information about the user who posted the reply. */
export type User2 = {
  /** The user's badge type, if applicable. */
  badge: string | null;
  /** Whether the user has had a staff-picked video. */
  isStaffPicked: boolean;
  /** The absolute URL of the authenticated users's profile page. */
  link: string;
  /** The display name of the user who posted the reply. */
  name: string;
  /** Information about the user's portraits. */
  pictures: Picture;
  /** The unique identifier to access the user resource. */
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
