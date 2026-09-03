import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Provenance = {
  AiGenerated: "ai_generated",
  UserUploaded: "user_uploaded",
  UserUploadedAndAiGenerated: "user_uploaded_and_ai_generated",
} as const;
export type Provenance = (typeof Provenance)[keyof typeof Provenance] | (string & {});

export const provenanceSchema: EnumSchema<Provenance> = s.enumOf<Provenance>(Provenance);
