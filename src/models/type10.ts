import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
