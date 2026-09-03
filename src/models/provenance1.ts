import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Provenance1 = {
  AutogenAlternateAudio: "autogen_alternate_audio",
  AutogenDubbed: "autogen_dubbed",
  AutogenLiveAudio: "autogen_live_audio",
  AutogenSourceAudio: "autogen_source_audio",
  AutogenTranslated: "autogen_translated",
  UserUploaded: "user_uploaded",
} as const;
export type Provenance1 = (typeof Provenance1)[keyof typeof Provenance1] | (string & {});

export const provenance1Schema: EnumSchema<Provenance1> = s.enumOf<Provenance1>(Provenance1);
