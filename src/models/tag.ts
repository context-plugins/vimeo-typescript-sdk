import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metadata2Schema, type Metadata2 } from "./metadata2.js";

export type Tag = {
  /** The normalized canonical tag name. */
  canonical: string;
  /** Metadata about the tag. */
  metadata: Metadata2;
  /** The tag value. */
  name: string;
  /** The tag's resource key string. */
  resourceKey: string;
  /** The canonical relative URI of the tag. */
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
