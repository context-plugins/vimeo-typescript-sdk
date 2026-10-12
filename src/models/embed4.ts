import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The event's embed permission setting.
 *
 * Option descriptions:
 *  * `private` - The event can't be embedded on any domain.
 *  * `public` - The event can be embedded on any domain.
 *  * `whitelist` - The event can be embedded on permitted domains only.
 */
export const Embed4 = {
  Private: "private",
  Public: "public",
  Whitelist: "whitelist",
} as const;
export type Embed4 = (typeof Embed4)[keyof typeof Embed4] | (string & {});

export const embed4Schema: EnumSchema<Embed4> = s.enumOf<Embed4>(Embed4);
