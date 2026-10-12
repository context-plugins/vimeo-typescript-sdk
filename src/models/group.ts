import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metadata6Schema, type Metadata6 } from "./metadata6.js";
import { pictureSchema, type Picture } from "./picture.js";
import { privacy4Schema, type Privacy4 } from "./privacy4.js";
import { userSchema, type User } from "./user.js";

export type Group = {
  /** The time in ISO 8601 format when the group was created. */
  createdTime: string;
  /** The group's description. */
  description: string | null;
  /** The link to the group. */
  link: string;
  /** Metadata about the group. */
  metadata: Metadata6;
  /** The time in ISO 8601 format when the group was last modified. */
  modifiedTime: string;
  /** The group's display name. */
  name: string;
  /** The active picture for the group. */
  pictures: Picture;
  /** The group's privacy settings. */
  privacy: Privacy4;
  /** The resource key of the group. */
  resourceKey: string;
  /** The canonical relative URI of the group. */
  uri: string;
  /** The owner of the group. */
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
