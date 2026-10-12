import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about where and how to edit a video using the Vimeo Create editor. */
export type CreateEditor = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The URI that resolves to the connection data. */
  uri: string;
};

export const createEditorSchema: Schema<CreateEditor> = s.object<CreateEditor>({
  options: s.array(s.string()),
  uri: s.string(),
});
