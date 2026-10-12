import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The embed permission level for the event.
 *
 * Option descriptions:
 *  * `private` - Only the user can embed the event.
 *  * `public` - Anyone can embed the event.
 *  * `whitelist` - Only specified users can embed the event.
 */
export const Embed8 = {
  Private: "private",
  Public: "public",
  Whitelist: "whitelist",
} as const;
export type Embed8 = (typeof Embed8)[keyof typeof Embed8] | (string & {});

export const embed8Schema: EnumSchema<Embed8> = s.enumOf<Embed8>(Embed8);
