import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pictureSchema, type Picture } from "./picture.js";

/** Information about the user who shared the item. */
export type SharedUser = {
  /** The absolute URL of the users's profile page. */
  link?: string;
  /** The display name of the user who shared the item. */
  name?: string;
  /** Information about the user's portraits. */
  pictures?: Picture;
  /** The unique identifier to access the user resource. */
  uri?: string;
};

export const sharedUserSchema: Schema<SharedUser> = s.object<SharedUser>({
  link: s.optional(s.string()),
  name: s.optional(s.string()),
  pictures: s.optional(s.lazy(() => pictureSchema)),
  uri: s.optional(s.string()),
});
