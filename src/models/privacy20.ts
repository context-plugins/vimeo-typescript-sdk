import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { comments8Schema, type Comments8 } from "./comments8.js";
import { embed19Schema, type Embed19 } from "./embed19.js";
import { view14Schema, type View14 } from "./view14.js";

export type Privacy20 = {
  /** Whether a user can add the video to a showcase, channel, or group. */
  add?: boolean;
  /**
   * The privacy level required to comment on the video.
   *
   * Option descriptions:
   *  * `anybody` - Anyone can comment on the video.
   *  * `contacts` - Only the owner's contacts can comment on the video.
   *  * `nobody` - No one can comment on the video.
   */
  comments?: Comments8;
  /** Whether a user can download the video. This field isn't available to Vimeo Free members. */
  download?: boolean;
  /**
   * The video's embed setting. Specify the `whitelist` value to restrict embedding to a specific
   * set of domains. For more information, see our [Interacting with
   * Videos](https://developer.vimeo.com/api/guides/videos/interact#set-off-site-privacy) guide.
   *
   * Option descriptions:
   *  * `private` - The video can't be embedded.
   *  * `public` - The video can be embedded.
   *  * `whitelist` - The video can be embedded on the specified domains only.
   */
  embed?: Embed19;
  /**
   * The video's privacy setting. When this value is `users`, `application/json` is the only valid
   * content type. Also, some privacy settings are unavailable to Vimeo Free members; for more
   * information, see our [Help Center](https://vimeo.zendesk.com/hc/en-us/articles/224817847).
   *
   * Option descriptions:
   *  * `anybody` - Anyone can access the video. This privacy setting appears as `Public` on the
   *    Vimeo front end.
   *  * `contacts` - Only those who follow the owner on Vimeo can access the video. _This field is
   *    deprecated._
   *  * `disable` - The video is embeddable, but it's hidden on Vimeo and can't be played. This
   *    privacy setting appears as `Embed only` on the Vimeo front end.
   *  * `nobody` - No one except the owner can access the video. This privacy setting appears as
   *    `Private` on the Vimeo front end.
   *  * `password` - Only those with the password can access the video.
   *  * `team` - Anyone on the team can access the video. This privacy setting appears as `Company
   *    only` on the Vimeo front end.
   *  * `unlisted` - Only those with the private link can access the video.
   *  * `users` - Only Vimeo members can access the video. _This field is deprecated._
   */
  view?: View14;
};

export const privacy20Schema: Schema<Privacy20> = s.object<Privacy20>({
  add: s.optional(s.boolean()),
  comments: s.optional(s.lazy(() => comments8Schema)),
  download: s.optional(s.boolean()),
  embed: s.optional(s.lazy(() => embed19Schema)),
  view: s.optional(s.lazy(() => view14Schema)),
});
