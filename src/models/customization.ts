import { s, type Schema } from "../core/index.js";
import { logoSchema, type Logo } from "./logo.js";
import { titleFontFamilySchema, type TitleFontFamily } from "./title-font-family.js";
import { titleFontWeightSchema, type TitleFontWeight } from "./title-font-weight.js";

export type Customization = {
  ambientBacklight?: boolean;
  backgroundColor?: string | null;
  hideVimeoHeader?: boolean;
  logo?: Logo;
  titleFontFamily?: TitleFontFamily | null;
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
