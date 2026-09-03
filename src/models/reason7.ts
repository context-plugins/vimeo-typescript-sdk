import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Reason7 = {
  OwnerAccountBlocked: "owner_account_blocked",
  OwnerDisabledFeatureGroup: "owner_disabled_feature_group",
  OwnerPaymentDisabled: "owner_payment_disabled",
  TranscriptStatusDoesNotExist: "transcript_status_does_not_exist",
} as const;
export type Reason7 = (typeof Reason7)[keyof typeof Reason7] | (string & {});

export const reason7Schema: EnumSchema<Reason7> = s.enumOf<Reason7>(Reason7);
