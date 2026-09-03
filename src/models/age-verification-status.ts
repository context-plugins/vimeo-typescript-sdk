import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AgeVerificationStatus = {
  Failed: "failed",
  Passed: "passed",
  Pending: "pending",
} as const;
export type AgeVerificationStatus =
  | (typeof AgeVerificationStatus)[keyof typeof AgeVerificationStatus]
  | (string & {});

export const ageVerificationStatusSchema: EnumSchema<AgeVerificationStatus> =
  s.enumOf<AgeVerificationStatus>(AgeVerificationStatus);
