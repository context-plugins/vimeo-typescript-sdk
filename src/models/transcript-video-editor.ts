import { s, type Schema } from "../core/index.js";

export type TranscriptVideoEditor = {
  options: string[];
  uri: string;
};

export const transcriptVideoEditorSchema: Schema<TranscriptVideoEditor> = s.object<TranscriptVideoEditor>({
  options: s.array(s.string()),
  uri: s.string(),
});
