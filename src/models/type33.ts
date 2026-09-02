import { s, type EnumSchema } from "../core/index.js";

export const Type33 = {
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
export type Type33 = (typeof Type33)[keyof typeof Type33] | (string & {});

export const type33Schema: EnumSchema<Type33> = s.enumOf<Type33>(Type33);
