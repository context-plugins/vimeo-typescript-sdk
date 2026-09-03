import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { provenanceSchema, type Provenance } from "./provenance.js";
import { type57Schema, type Type57 } from "./type57.js";

export type VideosVersionsAudiotracksAudiotrackIdRequest = {
  active?: boolean;
  languageCode?: string;
  provenance?: Provenance;
  type?: Type57;
};

export const videosVersionsAudiotracksAudiotrackIdRequestSchema: Schema<VideosVersionsAudiotracksAudiotrackIdRequest> =
  s.object<VideosVersionsAudiotracksAudiotrackIdRequest>({
    active: s.optional(s.boolean()),
    languageCode: s.optional(s.string()),
    provenance: s.optional(s.lazy(() => provenanceSchema)),
    type: s.optional(s.lazy(() => type57Schema)),
    _keysMap: {
      languageCode: "language_code",
    },
  });
