import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { logoSchema, type Logo } from "./logo.js";
import { titleFontFamilySchema, type TitleFontFamily } from "./title-font-family.js";
import { titleFontWeightSchema, type TitleFontWeight } from "./title-font-weight.js";

/** The contents of the page customization group (background color, title font, and inline logo). */
export type Customization = {
  /** Whether to render the ambient backlight glow behind the video player on the page. */
  ambientBacklight?: boolean;
  /** The page background color as a `#`-prefixed hex string, or null if not set. */
  backgroundColor?: string | null;
  /** Whether to hide the Vimeo header (top navigation bar) on the video page. */
  hideVimeoHeader?: boolean;
  /** Optional logo to display inline with the video title. */
  logo?: Logo;
  /** The selected video title font family. */
  titleFontFamily?: TitleFontFamily | null;
  /**
   * The selected video title font weight.
   *
   * Option descriptions:
   *  * `300` - Light
   *  * `400` - Regular
   *  * `500` - Medium
   *  * `700` - Bold
   */
  titleFontWeight?: TitleFontWeight | null;
};

export const customizationSchema: Schema<Customization> = s.object<Customization>({
  ambientBacklight: s.optional(s.boolean()),
  backgroundColor: s.optionalNullable(s.string()),
  hideVimeoHeader: s.optional(s.boolean()),
  logo: s.optional(s.lazy(() => logoSchema)),
  titleFontFamily: s.optionalNullable(s.lazy(() => titleFontFamilySchema)),
  titleFontWeight: s.optionalNullable(s.lazy(() => titleFontWeightSchema)),
  _keysMap: {
    ambientBacklight: "ambient_backlight",
    backgroundColor: "background_color",
    hideVimeoHeader: "hide_vimeo_header",
    titleFontFamily: "title_font_family",
    titleFontWeight: "title_font_weight",
  },
});
