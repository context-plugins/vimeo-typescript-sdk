import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The height, width, and source URL properties used to generate the fixed HTML embed code. */
export type EmbedProperties = {
  /** The height used to generate the fixed HTML embed code. */
  height: string;
  /** The source URL used to generate the fixed HTML embed code. */
  sourceUrl: string;
  /** The width used to generate the fixed HTML embed code. */
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
