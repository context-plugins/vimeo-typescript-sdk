import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The upload source of the text track.
 *
 * Option descriptions:
 *  * `autogen_alternate_audio` - The text track is automatically generated from alternate audio.
 *  * `autogen_dubbed` - The text track is automatically generated from AI dubbing.
 *  * `autogen_live_audio` - The text track is automatically generated from live audio.
 *  * `autogen_source_audio` - The text track is automatically generated from source audio.
 *  * `autogen_translated` - The text track is automatically generated from AI translation.
 *  * `user_uploaded` - The text track is uploaded by a user.
 */
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
