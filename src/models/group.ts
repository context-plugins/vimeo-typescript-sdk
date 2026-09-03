import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metadata6Schema, type Metadata6 } from "./metadata6.js";
import { pictureSchema, type Picture } from "./picture.js";
import { privacy4Schema, type Privacy4 } from "./privacy4.js";
import { userSchema, type User } from "./user.js";

export type Group = {
  createdTime: string;
  description: string | null;
  link: string;
  metadata: Metadata6;
  modifiedTime: string;
  name: string;
  pictures: Picture;
  privacy: Privacy4;
  resourceKey: string;
  uri: string;
  user?: User | null;
};

export const groupSchema: Schema<Group> = s.object<Group>({
  createdTime: s.string(),
  description: s.nullable(s.string()),
  link: s.string(),
  metadata: metadata6Schema,
  modifiedTime: s.string(),
  name: s.string(),
  pictures: pictureSchema,
  privacy: privacy4Schema,
  resourceKey: s.string(),
  uri: s.string(),
  user: s.optionalNullable(s.lazy(() => userSchema)),
  _keysMap: {
    createdTime: "created_time",
    modifiedTime: "modified_time",
    resourceKey: "resource_key",
  },
});
