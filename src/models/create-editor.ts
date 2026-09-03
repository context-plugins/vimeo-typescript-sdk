import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateEditor = {
  options: string[];
  uri: string;
};

export const createEditorSchema: Schema<CreateEditor> = s.object<CreateEditor>({
  options: s.array(s.string()),
  uri: s.string(),
});
