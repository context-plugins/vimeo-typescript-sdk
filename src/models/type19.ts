import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the simulcast destination.
 *
 * Option descriptions:
 *  * `channel` - The destination is a YouTube channel.
 *  * `custom` - The destination is custom.
 *  * `organization` - The destination is a LinkedIn organization.
 *  * `page` - The destination is a Facebook page.
 *  * `profile` - The destination is a Facebook or LinkedIn profile.
 */
export const Type19 = {
  Channel: "channel",
  Custom: "custom",
  Organization: "organization",
  Page: "page",
  Profile: "profile",
} as const;
export type Type19 = (typeof Type19)[keyof typeof Type19] | (string & {});

export const type19Schema: EnumSchema<Type19> = s.enumOf<Type19>(Type19);
