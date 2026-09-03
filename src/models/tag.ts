import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metadata2Schema, type Metadata2 } from "./metadata2.js";

export type Tag = {
  canonical: string;
  metadata: Metadata2;
  name: string;
  resourceKey: string;
  uri: string;
};

export const tagSchema: Schema<Tag> = s.object<Tag>({
  canonical: s.string(),
  metadata: metadata2Schema,
  name: s.string(),
  resourceKey: s.string(),
  uri: s.string(),
  _keysMap: {
    resourceKey: "resource_key",
  },
});
