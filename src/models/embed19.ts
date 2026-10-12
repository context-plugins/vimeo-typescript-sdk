import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The video's embed setting. Specify the `whitelist` value to restrict embedding to a specific set
 * of domains. For more information, see our [Interacting with
 * Videos](https://developer.vimeo.com/api/guides/videos/interact#set-off-site-privacy) guide.
 *
 * Option descriptions:
 *  * `private` - The video can't be embedded.
 *  * `public` - The video can be embedded.
 *  * `whitelist` - The video can be embedded on the specified domains only.
 */
export const Embed19 = {
  Private: "private",
  Public: "public",
  Whitelist: "whitelist",
} as const;
export type Embed19 = (typeof Embed19)[keyof typeof Embed19] | (string & {});

export const embed19Schema: EnumSchema<Embed19> = s.enumOf<Embed19>(Embed19);
