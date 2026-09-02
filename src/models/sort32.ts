import { s, type EnumSchema } from "../core/index.js";

export const Sort32 = {
  Added: "added",
  Alphabetical: "alphabetical",
  Date: "date",
  ModifiedTime: "modified_time",
  Name: "name",
  PublishTime: "publish.time",
  Rating: "rating",
} as const;
export type Sort32 = (typeof Sort32)[keyof typeof Sort32] | (string & {});

export const sort32Schema: EnumSchema<Sort32> = s.enumOf<Sort32>(Sort32);
