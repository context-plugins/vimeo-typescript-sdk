import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
export const Type10 = {
  Appearance: "appearance",
  Category: "category",
  Channel: "channel",
  FacebookFeed: "facebook_feed",
  Group: "group",
  Like: "like",
  Ondemand: "ondemand",
  Share: "share",
  Tag: "tag",
  TwitterTimeline: "twitter_timeline",
  Upload: "upload",
} as const;
export type Type10 = (typeof Type10)[keyof typeof Type10] | (string & {});

export const type10Schema: EnumSchema<Type10> = s.enumOf<Type10>(Type10);
