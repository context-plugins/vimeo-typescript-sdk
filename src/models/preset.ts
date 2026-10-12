import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metadata23Schema, type Metadata23 } from "./metadata23.js";
import { settings1Schema, type Settings1 } from "./settings1.js";
import { userSchema, type User } from "./user.js";

export type Preset = {
  /** The time in ISO 8601 format when the preset was created. */
  createdOn: string;
  /** Metadata about the preset. */
  metadata: Metadata23;
  /** The time in ISO 8601 format when the preset was last modified. */
  modifiedOn: string;
  /** The display name of the preset group. */
  name: string;
  /** The contents of the preset group. */
  settings: Settings1;
  /** The canonical relative URI of the preset object. */
  uri: string;
  /** The owner of the preset. */
  user: User | null;
};

export const presetSchema: Schema<Preset> = s.object<Preset>({
  createdOn: s.string(),
  metadata: metadata23Schema,
  modifiedOn: s.string(),
  name: s.string(),
  settings: settings1Schema,
  uri: s.string(),
  user: s.nullable(s.lazy(() => userSchema)),
  _keysMap: {
    createdOn: "created_on",
    modifiedOn: "modified_on",
  },
});
