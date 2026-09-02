import { s, type Schema } from "../core/index.js";

export type CreateEditor = {
  options: string[];
  uri: string;
};

export const createEditorSchema: Schema<CreateEditor> = s.object<CreateEditor>({
  options: s.array(s.string()),
  uri: s.string(),
});
