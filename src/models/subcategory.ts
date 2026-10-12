import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Subcategory = {
  /** The URL to access the subcategory in a browser. */
  link: string;
  /** The display name that identifies the subcategory. */
  name: string;
  /** The unique identifier to access the subcategory. */
  uri: string;
};

export const subcategorySchema: Schema<Subcategory> = s.object<Subcategory>({
  link: s.string(),
  name: s.string(),
  uri: s.string(),
});
