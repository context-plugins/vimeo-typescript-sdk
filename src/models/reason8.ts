import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The reason why the translation method is disabled.
 *
 * Option descriptions:
 *  * `language_not_supported` - The video language isn't supported.
 *  * `owner_account_blocked` - The owner account is blocked due to billing issues.
 *  * `owner_disabled_feature_group` - The owner has disabled the feature group.
 *  * `video_too_long` - The video is too long.
 */
export const Reason8 = {
  LanguageNotSupported: "language_not_supported",
  OwnerAccountBlocked: "owner_account_blocked",
  OwnerDisabledFeatureGroup: "owner_disabled_feature_group",
  VideoTooLong: "video_too_long",
} as const;
export type Reason8 = (typeof Reason8)[keyof typeof Reason8] | (string & {});

export const reason8Schema: EnumSchema<Reason8> = s.enumOf<Reason8>(Reason8);
