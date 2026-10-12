import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { privacy8Schema, type Privacy8 } from "./privacy8.js";

export type ChannelsRequest1 = {
  /** The description of the channel. */
  description?: string;
  /**
   * The link to access the channel. You can use a custom name in the URL in place of a numeric
   * channel ID, as in `/channels/{url_custom}`. Submitting `""` for this field removes the link
   * alias.
   */
  link?: string;
  /** The name of the channel. */
  name?: string;
  /**
   * The privacy level of the channel.
   *
   * Option descriptions:
   *  * `anybody` - Anyone can access the channel.
   *  * `moderators` - Only moderators can access the channel.
   *  * `users` - Only moderators and designated users can access the channel.
   */
  privacy?: Privacy8;
};

export const channelsRequest1Schema: Schema<ChannelsRequest1> = s.object<ChannelsRequest1>({
  description: s.optional(s.string()),
  link: s.optional(s.string()),
  name: s.optional(s.string()),
  privacy: s.optional(s.lazy(() => privacy8Schema)),
});
