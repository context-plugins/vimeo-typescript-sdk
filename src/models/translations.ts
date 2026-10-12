import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reason8Schema, type Reason8 } from "./reason8.js";

/** Information about where and how to create a translation for the video. */
export type Translations = {
  /** Whether the translation method is disabled. */
  disabled: boolean;
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /**
   * The reason why the translation method is disabled.
   *
   * Option descriptions:
   *  * `language_not_supported` - The video language isn't supported.
   *  * `owner_account_blocked` - The owner account is blocked due to billing issues.
   *  * `owner_disabled_feature_group` - The owner has disabled the feature group.
   *  * `video_too_long` - The video is too long.
   */
  reason: Reason8 | null;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const translationsSchema: Schema<Translations> = s.object<Translations>({
  disabled: s.boolean(),
  options: s.array(s.string()),
  reason: s.nullable(s.lazy(() => reason8Schema)),
  uri: s.string(),
});
