import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The authenticated user's privacy preference for embeds.
 *
 * Option descriptions:
 *  * `private` - Only the user can embed their own videos.
 *  * `public` - Anyone can embed the user's videos.
 *  * `whitelist` - Only specified users can embed the user's videos.
 */
export const Embed = {
  Private: "private",
  Public: "public",
  Whitelist: "whitelist",
} as const;
export type Embed = (typeof Embed)[keyof typeof Embed] | (string & {});

export const embedSchema: EnumSchema<Embed> = s.enumOf<Embed>(Embed);
