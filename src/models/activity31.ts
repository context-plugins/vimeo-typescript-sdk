import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categorySchema, type Category } from "./category.js";
import { channelSchema, type Channel } from "./channel.js";
import { groupSchema, type Group } from "./group.js";
import { metadata7Schema, type Metadata7 } from "./metadata7.js";
import { onDemandPageSchema, type OnDemandPage } from "./on-demand-page.js";
import { tagSchema, type Tag } from "./tag.js";
import { type10Schema, type Type10 } from "./type10.js";
import { userSchema, type User } from "./user.js";
import { videoSchema, type Video } from "./video.js";

export type Activity31 = {
  /**
   * The category associated with the event. This field is present only when the activity type is
   * `category`.
   */
  category?: Category;
  /**
   * The channel associated with the event. This field is present only when the activity type is
   * `channel`.
   */
  channel?: Channel;
  /** The video associated with the activity. */
  clip: Video;
  /**
   * The group associated with the event. This field is present only when the activity type is
   * `group`.
   */
  group?: Group;
  /** Information about the activity's metadata. */
  metadata: Metadata7;
  /**
   * The Vimeo On Demand page associated with the event. This field is present only when the
   * activity type is `ondemand`.
   */
  ondemandPage?: OnDemandPage;
  /**
   * The tag associated with the event. This field is present only when the activity type is `tag`.
   */
  tag?: Tag;
  /** The time that the event occurred. */
  time: string;
  /**
   * The activity type.
   *
   * Option descriptions:
   *  * `appearance` - The activity is an appearance action.
   *  * `category` - The activity is a category action.
   *  * `channel` - The activity is a channel action.
   *  * `facebook_feed` - The activity is a Facebook feed action.
   *  * `group` - The activity is a group action.
   *  * `like` - The activity is a like action.
   *  * `ondemand` - The activity is a Vimeo On Demand action.
   *  * `share` - The activity is a share action.
   *  * `tag` - The activity is a tag action.
   *  * `twitter_timeline` - The activity is a Twitter timeline action.
   *  * `upload` - The activity is an upload action.
   */
  type: Type10;
  /**
   * The user associated with the event. This field is present only when the activity type is
   * `like`, `appearance`, or `share`.
   */
  user?: User;
};

export const activity31Schema: Schema<Activity31> = s.object<Activity31>({
  category: s.optional(s.lazy(() => categorySchema)),
  channel: s.optional(s.lazy(() => channelSchema)),
  clip: videoSchema,
  group: s.optional(s.lazy(() => groupSchema)),
  metadata: metadata7Schema,
  ondemandPage: s.optional(s.lazy(() => onDemandPageSchema)),
  tag: s.optional(s.lazy(() => tagSchema)),
  time: s.string(),
  type: type10Schema,
  user: s.optional(s.lazy(() => userSchema)),
  _keysMap: {
    ondemandPage: "ondemand_page",
  },
});
