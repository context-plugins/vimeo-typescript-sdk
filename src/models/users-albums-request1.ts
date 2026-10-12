import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { layout1Schema, type Layout1 } from "./layout1.js";
import { privacy12Schema, type Privacy12 } from "./privacy12.js";
import { sort19Schema, type Sort19 } from "./sort19.js";
import { themeSchema, type Theme } from "./theme.js";

export type UsersAlbumsRequest1 = {
  /** The hexadecimal color code for the color of the player buttons and showcase controls. */
  brandColor?: string;
  /** The description of the showcase. */
  description?: string;
  /** The custom domain of the showcase. */
  domain?: string | null;
  /** Whether to hide Vimeo navigation when displaying the showcase. */
  hideNav?: boolean;
  /** Whether to include the upcoming event in the showcase. */
  hideUpcoming?: boolean;
  /**
   * The type of layout for presenting the showcase.
   *
   * Option descriptions:
   *  * `grid` - The videos appear in a grid.
   *  * `player` - The videos appear in the player.
   */
  layout?: Layout1;
  /** The name of the showcase. */
  name?: string;
  /** The showcase's password. This field is required only when **privacy** is `password`. */
  password?: string;
  /**
   * The privacy level of the showcase.
   *
   * Option descriptions:
   *  * `anybody` - Anyone can access the showcase, either on Vimeo or through an embed.
   *  * `embed_only` - The showcase doesn't appear on Vimeo, but it can be embedded on other sites.
   *  * `nobody` - No one can access the showcase, including the authenticated user.
   *  * `password` - Only people with the password can access the showcase.
   *  * `team` - Only members of the authenticated user's team can access the showcase.
   *  * `unlisted` - The showcase can't be accessed if the URL omits its unlisted hash.
   */
  privacy?: Privacy12;
  /** Whether showcase videos use the review mode URL. */
  reviewMode?: boolean;
  /**
   * The default sort order of the videos as they appear in the showcase.
   *
   * Option descriptions:
   *  * `added_first` - The videos appear according to when they were added to the showcase, with
   *    the most recently added first.
   *  * `added_last` - The videos appear according to when they were added to the showcase, with the
   *    most recently added last.
   *  * `alphabetical` - The videos appear alphabetically by their title.
   *  * `alphabetical_desc` - The videos appear alphabetically by their title in reverse order.
   *  * `arranged` - The videos appear as arranged by the owner of the showcase.
   *  * `comments` - The videos appear according to their number of comments.
   *  * `likes` - The videos appear according to their number of likes.
   *  * `modified_time_asc` - The videos appear in ascending order based on their last modified
   *    time.
   *  * `modified_time_desc` - The videos appear in descending order based on their last modified
   *    time.
   *  * `newest` - The videos appear in chronological order with the newest first.
   *  * `oldest` - The videos appear in chronological order with the oldest first.
   *  * `plays` - The videos appear according to their number of plays.
   */
  sort?: Sort19;
  /**
   * The color theme of the showcase.
   *
   * Option descriptions:
   *  * `dark` - The showcase uses the dark theme.
   *  * `standard` - The showcase uses the standard theme.
   */
  theme?: Theme;
  /** The custom Vimeo URL of the showcase. */
  url?: string | null;
  /** Whether the user has opted for a custom domain for their showcase. */
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
