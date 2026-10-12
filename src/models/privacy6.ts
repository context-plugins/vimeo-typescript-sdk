import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The privacy setting of the destination.
 *
 * Option descriptions:
 *  * `CONNECTIONS` - The privacy setting is `CONNECTIONS` for LinkedIn.
 *  * `PUBLIC` - The privacy setting is `PUBLIC` for LinkedIn.
 *  * `all_friends` - The privacy setting is `all_friends` for Facebook.
 *  * `everyone` - The privacy setting is `everyone` for Facebook.
 *  * `private` - The privacy setting is `private` for YouTube.
 *  * `public` - The privacy setting is `public` for YouTube.
 *  * `self` - The privacy setting is `self` for Facebook.
 *  * `unlisted` - The privacy setting is `unlisted` for YouTube.
 */
export const Privacy6 = {
  Connections: "CONNECTIONS",
  Public: "PUBLIC",
  AllFriends: "all_friends",
  Everyone: "everyone",
  Private: "private",
  Public2: "public",
  Self: "self",
  Unlisted: "unlisted",
} as const;
export type Privacy6 = (typeof Privacy6)[keyof typeof Privacy6] | (string & {});

export const privacy6Schema: EnumSchema<Privacy6> = s.enumOf<Privacy6>(Privacy6);
