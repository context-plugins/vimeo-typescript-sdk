import { s, type EnumSchema } from "../core/index.js";

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
