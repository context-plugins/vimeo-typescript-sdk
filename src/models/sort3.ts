import { s, type EnumSchema } from "../core/index.js";

export const Sort3 = {
  LastVideoFeaturedTime: "last_video_featured_time",
  Name: "name",
} as const;
export type Sort3 = (typeof Sort3)[keyof typeof Sort3] | (string & {});

export const sort3Schema: EnumSchema<Sort3> = s.enumOf<Sort3>(Sort3);
