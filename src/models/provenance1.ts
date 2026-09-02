import { s, type EnumSchema } from "../core/index.js";

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
