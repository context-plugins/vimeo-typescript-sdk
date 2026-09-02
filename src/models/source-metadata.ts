import { s, type Schema } from "../core/index.js";
import { audioSchema, type Audio } from "./audio.js";
import { video4Schema, type Video4 } from "./video4.js";

export type SourceMetadata = {
  audio: Audio | null;
  displayFiletype: string | null;
  filetype: string | null;
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
