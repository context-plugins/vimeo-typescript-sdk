import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commentsSchema, type Comments } from "./comments.js";
import { embedSchema, type Embed } from "./embed.js";
import { view1Schema, type View1 } from "./view1.js";

export type Privacy1 = {
  /** Whether other users can add the authenticated user's videos. */
  add?: boolean;
  /** Whether unlisted videos are hidden from Vimeo. */
  allowShareLink?: boolean;
  /** The list of domains where the authenticated user can embed the video. */
  clipEmbedAllowedDomains?: string[];
  /**
   * The authenticated user's privacy preference for comments.
   *
   * Option descriptions:
   *  * `anybody` - Anyone can comment on the user's videos.
   *  * `contacts` - Only contacts can comment on the user's videos.
   *  * `nobody` - No one can comment on the user's videos.
   */
  comments?: Comments;
  /** Whether other users can download the authenticated user's videos. */
  download?: boolean;
  /**
   * The authenticated user's privacy preference for embeds.
   *
   * Option descriptions:
   *  * `private` - Only the user can embed their own videos.
   *  * `public` - Anyone can embed the user's videos.
   *  * `whitelist` - Only specified users can embed the user's videos.
   */
  embed?: Embed;
  /** The default password for the video. */
  password?: string;
  /**
   * The authenticated user's privacy preference for views.
   *
   * Option descriptions:
   *  * `anybody` - Anyone can view the user's videos. This privacy setting appears as `Public` on
   *    the Vimeo front end.
   *  * `contacts` - Only contacts can view the user's videos. _This field is deprecated._
   *  * `disable` - Views are disabled for the user's videos. This privacy setting appears as `Embed
   *    only` on the Vimeo front end.
   *  * `nobody` - No one except the user can view the user's videos. This privacy setting appears
   *    as `Private` on the Vimeo front end.
   *  * `password` - Only those with the password can view the user's videos.
   *  * `unlisted` - Anybody can view the user's videos if they have a link.
   *  * `users` - Only other Vimeo members can view the user's videos. _This field is deprecated._
   */
  view?: View1;
};

export const privacy1Schema: Schema<Privacy1> = s.object<Privacy1>({
  add: s.optional(s.boolean()),
  allowShareLink: s.optional(s.boolean()),
  clipEmbedAllowedDomains: s.optional(s.array(s.string())),
  comments: s.optional(s.lazy(() => commentsSchema)),
  download: s.optional(s.boolean()),
  embed: s.optional(s.lazy(() => embedSchema)),
  password: s.optional(s.string()),
  view: s.optional(s.lazy(() => view1Schema)),
  _keysMap: {
    allowShareLink: "allow_share_link",
    clipEmbedAllowedDomains: "clip_embed_allowed_domains",
  },
});
