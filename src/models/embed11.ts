import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The privacy for the user's embedded videos. The `whitelist` value enables you to define all valid
 * embeddable domains. See our [Interacting with
 * Videos](https://developer.vimeo.com/api/guides/videos/interact#set-off-site-privacy) guide for
 * details on adding and removing domains.
 *
 * Option descriptions:
 *  * `private` - The videos can't be embedded on any domain.
 *  * `public` - The videos can be embedded on any domain.
 *  * `whitelist` - The videos can be embedded on the specified domains only.
 */
export const Embed11 = {
  Private: "private",
  Public: "public",
  Whitelist: "whitelist",
} as const;
export type Embed11 = (typeof Embed11)[keyof typeof Embed11] | (string & {});

export const embed11Schema: EnumSchema<Embed11> = s.enumOf<Embed11>(Embed11);
