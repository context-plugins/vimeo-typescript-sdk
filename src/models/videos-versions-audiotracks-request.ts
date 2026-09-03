import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { provenance2Schema, type Provenance2 } from "./provenance2.js";
import { type53Schema, type Type53 } from "./type53.js";
import { upload5Schema, type Upload5 } from "./upload5.js";

export type VideosVersionsAudiotracksRequest = {
  active?: boolean;
  languageCode?: string;
  provenance?: Provenance2;
  type?: Type53;
  upload: Upload5;
};

export const videosVersionsAudiotracksRequestSchema: Schema<VideosVersionsAudiotracksRequest> =
  s.object<VideosVersionsAudiotracksRequest>({
    active: s.optional(s.boolean()),
    languageCode: s.optional(s.string()),
    provenance: s.optional(s.lazy(() => provenance2Schema)),
    type: s.optional(s.lazy(() => type53Schema)),
    upload: upload5Schema,
    _keysMap: {
      languageCode: "language_code",
    },
  });
