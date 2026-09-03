import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pictureSchema, type Picture } from "./picture.js";

export type SharedUser = {
  link?: string;
  name?: string;
  pictures?: Picture;
  uri?: string;
};

export const sharedUserSchema: Schema<SharedUser> = s.object<SharedUser>({
  link: s.optional(s.string()),
  name: s.optional(s.string()),
  pictures: s.optional(s.lazy(() => pictureSchema)),
  uri: s.optional(s.string()),
});
