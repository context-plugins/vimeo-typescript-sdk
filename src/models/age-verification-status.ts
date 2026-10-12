import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the user's age verification.
 *
 * Option descriptions:
 *  * `failed` - The user has failed age verification.
 *  * `passed` - The user has passed age verification.
 *  * `pending` - The user's age verification is pending.
 */
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
