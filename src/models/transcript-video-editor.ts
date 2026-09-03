import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TranscriptVideoEditor = {
  options: string[];
  uri: string;
};

export const transcriptVideoEditorSchema: Schema<TranscriptVideoEditor> = s.object<TranscriptVideoEditor>({
  options: s.array(s.string()),
  uri: s.string(),
});
