import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Information about where and how to edit a video using the Transcription-based Video Editor
 * editor.
 */
export type TranscriptVideoEditor = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The URI that resolves to the connection data. */
  uri: string;
};

export const transcriptVideoEditorSchema: Schema<TranscriptVideoEditor> = s.object<TranscriptVideoEditor>({
  options: s.array(s.string()),
  uri: s.string(),
});
