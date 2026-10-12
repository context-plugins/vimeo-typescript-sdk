import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { audioSchema, type Audio } from "./audio.js";
import { video4Schema, type Video4 } from "./video4.js";

/** Metadata about the source file. */
export type SourceMetadata = {
  /** Audio metadata information. */
  audio: Audio | null;
  /**
   * A human-readable version of the source video MIME type, such as `MP4`, `WebM`, or `MOV`, or the
   * raw MIME type, depending on the MIME type.
   */
  displayFiletype: string | null;
  /** The MIME type of the source video. */
  filetype: string | null;
  /** Video metadata information. */
  video: Video4 | null;
};

export const sourceMetadataSchema: Schema<SourceMetadata> = s.object<SourceMetadata>({
  audio: s.nullable(s.lazy(() => audioSchema)),
  displayFiletype: s.nullable(s.string()),
  filetype: s.nullable(s.string()),
  video: s.nullable(s.lazy(() => video4Schema)),
  _keysMap: {
    displayFiletype: "display_filetype",
  },
});
