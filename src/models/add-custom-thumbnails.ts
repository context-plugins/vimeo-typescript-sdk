import { s, type Schema } from "../core/index.js";

export type AddCustomThumbnails = {
  options: string[];
  uri: string;
};

export const addCustomThumbnailsSchema: Schema<AddCustomThumbnails> = s.object<AddCustomThumbnails>({
  options: s.array(s.string()),
  uri: s.string(),
});
