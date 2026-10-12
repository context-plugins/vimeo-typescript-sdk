import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type32Schema, type Type32 } from "./type32.js";

/** The navbar logo configuration of the event landing page. */
export type LandingPageLogo2 = {
  /**
   * Which logo to show in the landing page navbar.
   *
   * Option descriptions:
   *  * `custom` - A custom brand-kit logo (see `uri`).
   *  * `none` - No logo is shown.
   *  * `vimeo` - The Vimeo logo.
   */
  type?: Type32;
  /**
   * Brand-kit logo resource URI. Required when `type` is `custom`. The display URL is derived
   * server-side from this URI.
   */
  uri?: string;
};

export const landingPageLogo2Schema: Schema<LandingPageLogo2> = s.object<LandingPageLogo2>({
  type: s.optional(s.lazy(() => type32Schema)),
  uri: s.optional(s.string()),
});
