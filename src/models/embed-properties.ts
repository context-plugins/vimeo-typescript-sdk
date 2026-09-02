import { s, type Schema } from "../core/index.js";

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
