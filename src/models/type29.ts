import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type29 = {
  Appears: "appears",
  CategoryFeatured: "category_featured",
  Channel: "channel",
  FacebookFeed: "facebook_feed",
  Following: "following",
  Group: "group",
  Likes: "likes",
  OndemandPublish: "ondemand_publish",
  Share: "share",
  TaggedWith: "tagged_with",
  TwitterTimeline: "twitter_timeline",
  Uploads: "uploads",
} as const;
export type Type29 = (typeof Type29)[keyof typeof Type29] | (string & {});

export const type29Schema: EnumSchema<Type29> = s.enumOf<Type29>(Type29);
