import { s, type EnumSchema } from "../core/index.js";

export const Filter45 = {
  Cc: "CC",
  CcBy: "CC-BY",
  CcByNc: "CC-BY-NC",
  CcByNcNd: "CC-BY-NC-ND",
  CcByNcSa: "CC-BY-NC-SA",
  CcByNd: "CC-BY-ND",
  CcBySa: "CC-BY-SA",
  Cc0: "CC0",
  Categories: "categories",
  Duration: "duration",
  InProgress: "in-progress",
  MinimumLikes: "minimum_likes",
  Trending: "trending",
  UploadDate: "upload_date",
} as const;
export type Filter45 = (typeof Filter45)[keyof typeof Filter45] | (string & {});

export const filter45Schema: EnumSchema<Filter45> = s.enumOf<Filter45>(Filter45);
