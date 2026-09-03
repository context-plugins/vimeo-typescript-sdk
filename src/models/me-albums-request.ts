import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { layout1Schema, type Layout1 } from "./layout1.js";
import { privacy11Schema, type Privacy11 } from "./privacy11.js";
import { sort19Schema, type Sort19 } from "./sort19.js";
import { themeSchema, type Theme } from "./theme.js";

export type MeAlbumsRequest = {
  brandColor?: string;
  description?: string;
  hideFromVimeo?: boolean;
  hideNav?: boolean;
  hideUpcoming?: boolean;
  layout?: Layout1;
  name: string;
  password?: string;
  privacy?: Privacy11;
  reviewMode?: boolean;
  sort?: Sort19;
  theme?: Theme;
};

export const meAlbumsRequestSchema: Schema<MeAlbumsRequest> = s.object<MeAlbumsRequest>({
  brandColor: s.optional(s.string()),
  description: s.optional(s.string()),
  hideFromVimeo: s.optional(s.boolean()),
  hideNav: s.optional(s.boolean()),
  hideUpcoming: s.optional(s.boolean()),
  layout: s.optional(s.lazy(() => layout1Schema)),
  name: s.string(),
  password: s.optional(s.string()),
  privacy: s.optional(s.lazy(() => privacy11Schema)),
  reviewMode: s.optional(s.boolean()),
  sort: s.optional(s.lazy(() => sort19Schema)),
  theme: s.optional(s.lazy(() => themeSchema)),
  _keysMap: {
    brandColor: "brand_color",
    hideFromVimeo: "hide_from_vimeo",
    hideNav: "hide_nav",
    hideUpcoming: "hide_upcoming",
    reviewMode: "review_mode",
  },
});
