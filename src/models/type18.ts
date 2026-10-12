import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Which logo to show in the landing page navbar.
 *
 * Option descriptions:
 *  * `custom` - A custom brand-kit logo (see `uri`/`url`).
 *  * `none` - No logo is shown.
 *  * `vimeo` - The Vimeo logo.
 */
export const Type18 = {
  Custom: "custom",
  None: "none",
  Vimeo: "vimeo",
} as const;
export type Type18 = (typeof Type18)[keyof typeof Type18] | (string & {});

export const type18Schema: EnumSchema<Type18> = s.enumOf<Type18>(Type18);
