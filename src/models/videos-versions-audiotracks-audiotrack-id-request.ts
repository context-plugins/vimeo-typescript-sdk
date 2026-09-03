import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { provenanceSchema, type Provenance } from "./provenance.js";
import { type53Schema, type Type53 } from "./type53.js";

export type VideosVersionsAudiotracksAudiotrackIdRequest = {
  active?: boolean;
  languageCode?: string;
  provenance?: Provenance;
  type?: Type53;
};

export const videosVersionsAudiotracksAudiotrackIdRequestSchema: Schema<VideosVersionsAudiotracksAudiotrackIdRequest> =
  s.object<VideosVersionsAudiotracksAudiotrackIdRequest>({
    active: s.optional(s.boolean()),
    languageCode: s.optional(s.string()),
    provenance: s.optional(s.lazy(() => provenanceSchema)),
    type: s.optional(s.lazy(() => type53Schema)),
    _keysMap: {
      languageCode: "language_code",
    },
  });
