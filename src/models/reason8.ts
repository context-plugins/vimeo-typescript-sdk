import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Reason8 = {
  LanguageNotSupported: "language_not_supported",
  OwnerAccountBlocked: "owner_account_blocked",
  OwnerDisabledFeatureGroup: "owner_disabled_feature_group",
  VideoTooLong: "video_too_long",
} as const;
export type Reason8 = (typeof Reason8)[keyof typeof Reason8] | (string & {});

export const reason8Schema: EnumSchema<Reason8> = s.enumOf<Reason8>(Reason8);
