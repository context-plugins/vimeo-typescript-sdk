import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Provenance2 = {
  AiGenerated: "ai_generated",
  UserUploaded: "user_uploaded",
  UserUploadedAndAiGenerated: "user_uploaded_and_ai_generated",
} as const;
export type Provenance2 = (typeof Provenance2)[keyof typeof Provenance2] | (string & {});

export const provenance2Schema: EnumSchema<Provenance2> = s.enumOf<Provenance2>(Provenance2);
