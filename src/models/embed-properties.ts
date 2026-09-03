import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EmbedProperties = {
  height: string;
  sourceUrl: string;
  width: string;
};

export const embedPropertiesSchema: Schema<EmbedProperties> = s.object<EmbedProperties>({
  height: s.string(),
  sourceUrl: s.string(),
  width: s.string(),
  _keysMap: {
    sourceUrl: "source_url",
  },
});
