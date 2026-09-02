import { s, type EnumSchema } from "../core/index.js";

export const Filter19 = {
  All: "all",
  ExpiringSoon: "expiring_soon",
  Film: "film",
  Important: "important",
  Purchased: "purchased",
  Rented: "rented",
  Series: "series",
  Subscription: "subscription",
  Unwatched: "unwatched",
  Watched: "watched",
} as const;
export type Filter19 = (typeof Filter19)[keyof typeof Filter19] | (string & {});

export const filter19Schema: EnumSchema<Filter19> = s.enumOf<Filter19>(Filter19);
