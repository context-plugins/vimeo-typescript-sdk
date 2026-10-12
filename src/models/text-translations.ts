import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reason7Schema, type Reason7 } from "./reason7.js";

/** Information about where and how to create a text translation for the video. */
export type TextTranslations = {
  /** Whether the translation method is disabled. */
  disabled: boolean;
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /**
   * The reason why the translation method is disabled.
   *
   * Option descriptions:
   *  * `owner_account_blocked` - The owner account is blocked due to billing issues.
   *  * `owner_disabled_feature_group` - The owner has disabled the feature group.
   *  * `owner_payment_disabled` - The owner account can't use the payments service.
   *  * `transcript_status_does_not_exist` - The video transcript doesn't exist.
   */
  reason: Reason7 | null;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const textTranslationsSchema: Schema<TextTranslations> = s.object<TextTranslations>({
  disabled: s.boolean(),
  options: s.array(s.string()),
  reason: s.nullable(s.lazy(() => reason7Schema)),
  uri: s.string(),
});
