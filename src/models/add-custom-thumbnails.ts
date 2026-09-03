import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AddCustomThumbnails = {
  options: string[];
  uri: string;
};

export const addCustomThumbnailsSchema: Schema<AddCustomThumbnails> = s.object<AddCustomThumbnails>({
  options: s.array(s.string()),
  uri: s.string(),
});
