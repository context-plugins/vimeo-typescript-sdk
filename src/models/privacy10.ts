import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { comments4Schema, type Comments4 } from "./comments4.js";
import { embed11Schema, type Embed11 } from "./embed11.js";
import { view11Schema, type View11 } from "./view11.js";

export type Privacy10 = {
  /** Whether the user can add videos to showcases, channels, or groups by default. */
  add?: boolean;
  /**
   * Who can comment on the user's video uploads by default.
   *
   * Option descriptions:
   *  * `anybody` - Anyone can comment.
   *  * `contacts` - Only the user's contacts can comment.
   *  * `nobody` - No one can comment.
   */
  comments?: Comments4;
  /**
   * Whether the user can download videos. This value becomes the default download setting for all
   * future videos that the user uploads.
   */
  download?: boolean;
  /**
   * The privacy for the user's embedded videos. The `whitelist` value enables you to define all
   * valid embeddable domains. See our [Interacting with
   * Videos](https://developer.vimeo.com/api/guides/videos/interact#set-off-site-privacy) guide for
   * details on adding and removing domains.
   *
   * Option descriptions:
   *  * `private` - The videos can't be embedded on any domain.
   *  * `public` - The videos can be embedded on any domain.
   *  * `whitelist` - The videos can be embedded on the specified domains only.
   */
  embed?: Embed11;
  /** An array of the user's default list of valid domains for embedding videos. */
  embedAllowedDomains?: string[];
  /**
   * Who can access the user's videos by default.
   *
   * Option descriptions:
   *  * `anybody` - Anyone can access the videos. This privacy setting appears as `Public` on the
   *    Vimeo front end.
   *  * `contacts` - Only the user's contacts can access the videos. _This field is deprecated._
   *  * `disable` - The videos are disabled. This privacy setting appears as `Embed only` on the
   *    Vimeo front end.
   *  * `nobody` - No one can access the videos. This privacy setting appears as `Private` on the
   *    Vimeo front end.
   *  * `password` - Only those with the password can access the videos.
   *  * `unlisted` - The videos are unlisted.
   *  * `users` - Only other Vimeo members can access the videos. _This field is deprecated._
   */
  view?: View11;
};

export const privacy10Schema: Schema<Privacy10> = s.object<Privacy10>({
  add: s.optional(s.boolean()),
  comments: s.optional(s.lazy(() => comments4Schema)),
  download: s.optional(s.boolean()),
  embed: s.optional(s.lazy(() => embed11Schema)),
  embedAllowedDomains: s.optional(s.array(s.string())),
  view: s.optional(s.lazy(() => view11Schema)),
  _keysMap: {
    embedAllowedDomains: "embed_allowed_domains",
  },
});
