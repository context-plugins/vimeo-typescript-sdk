import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type18Schema, type Type18 } from "./type18.js";

/**
 * The navbar logo configuration of the event landing page, or `null` when the event was never
 * configured (default rendering).
 */
export type LandingPageLogo = {
  /**
   * Which logo to show in the landing page navbar.
   *
   * Option descriptions:
   *  * `custom` - A custom brand-kit logo (see `uri`/`url`).
   *  * `none` - No logo is shown.
   *  * `vimeo` - The Vimeo logo.
   */
  type: Type18;
  /** Brand-kit logo resource URI (custom only). */
  uri: string | null;
  /** Brand-kit logo image URL (custom only). */
  url: string | null;
};

export const landingPageLogoSchema: Schema<LandingPageLogo> = s.object<LandingPageLogo>({
  type: type18Schema,
  uri: s.nullable(s.string()),
  url: s.nullable(s.string()),
});
