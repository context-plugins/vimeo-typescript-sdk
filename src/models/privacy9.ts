import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The privacy setting of the destination. Be sure to choose a value that corresponds to your
 * service.
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
export const Privacy9 = {
  Connections: "CONNECTIONS",
  Public: "PUBLIC",
  AllFriends: "all_friends",
  Everyone: "everyone",
  Private: "private",
  Public2: "public",
  Self: "self",
  Unlisted: "unlisted",
} as const;
export type Privacy9 = (typeof Privacy9)[keyof typeof Privacy9] | (string & {});

export const privacy9Schema: EnumSchema<Privacy9> = s.enumOf<Privacy9>(Privacy9);
