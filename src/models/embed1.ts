import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The video's embed permission setting.
 *
 * Option descriptions:
 *  * `private` - The video is private.
 *  * `public` - Anyone can embed the video.
 *  * `whitelist` - The video can be embedded on specific domains.
 */
export const Embed1 = {
  Private: "private",
  Public: "public",
  Whitelist: "whitelist",
} as const;
export type Embed1 = (typeof Embed1)[keyof typeof Embed1] | (string & {});

export const embed1Schema: EnumSchema<Embed1> = s.enumOf<Embed1>(Embed1);
