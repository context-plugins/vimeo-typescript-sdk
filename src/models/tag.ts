import { s, type Schema } from "../core/index.js";
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
