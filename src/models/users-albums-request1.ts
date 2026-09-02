import { s, type Schema } from "../core/index.js";
import { layout1Schema, type Layout1 } from "./layout1.js";
import { privacy12Schema, type Privacy12 } from "./privacy12.js";
import { sort19Schema, type Sort19 } from "./sort19.js";
import { themeSchema, type Theme } from "./theme.js";

export type UsersAlbumsRequest1 = {
  brandColor?: string;
  description?: string;
  domain?: string | null;
  hideNav?: boolean;
  hideUpcoming?: boolean;
  layout?: Layout1;
  name?: string;
  password?: string;
  privacy?: Privacy12;
  reviewMode?: boolean;
  sort?: Sort19;
  theme?: Theme;
  url?: string | null;
  useCustomDomain?: boolean;
};

export const usersAlbumsRequest1Schema: Schema<UsersAlbumsRequest1> = s.object<UsersAlbumsRequest1>({
  brandColor: s.optional(s.string()),
  description: s.optional(s.string()),
  domain: s.optionalNullable(s.string()),
  hideNav: s.optional(s.boolean()),
  hideUpcoming: s.optional(s.boolean()),
  layout: s.optional(s.lazy(() => layout1Schema)),
  name: s.optional(s.string()),
  password: s.optional(s.string()),
  privacy: s.optional(s.lazy(() => privacy12Schema)),
  reviewMode: s.optional(s.boolean()),
  sort: s.optional(s.lazy(() => sort19Schema)),
  theme: s.optional(s.lazy(() => themeSchema)),
  url: s.optionalNullable(s.string()),
  useCustomDomain: s.optional(s.boolean()),
  _keysMap: {
    brandColor: "brand_color",
    hideNav: "hide_nav",
    hideUpcoming: "hide_upcoming",
    reviewMode: "review_mode",
    useCustomDomain: "use_custom_domain",
  },
});
