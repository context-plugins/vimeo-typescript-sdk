import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { privacy7Schema, type Privacy7 } from "./privacy7.js";

export type ChannelsRequest = {
  /** The description of the channel. */
  description?: string;
  /**
   * The link to access the channel. You can use a custom name in the URL in place of a numeric
   * channel ID, as in `/channels/{url_custom}`.
   */
  link?: string;
  /** The name of the channel. */
  name: string;
  /**
   * The privacy level of the channel.
   *
   * Option descriptions:
   *  * `anybody` - Anyone can access the channel.
   *  * `moderators` - Only moderators can access the channel.
   *  * `user` - Only moderators and designated users can access the channel.
   */
  privacy: Privacy7;
};

export const channelsRequestSchema: Schema<ChannelsRequest> = s.object<ChannelsRequest>({
  description: s.optional(s.string()),
  link: s.optional(s.string()),
  name: s.string(),
  privacy: privacy7Schema,
});
