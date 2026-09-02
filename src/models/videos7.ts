import { s, type EnumSchema } from "../core/index.js";

export const Videos7 = {
  All: "all",
  Members: "members",
} as const;
export type Videos7 = (typeof Videos7)[keyof typeof Videos7] | (string & {});

export const videos7Schema: EnumSchema<Videos7> = s.enumOf<Videos7>(Videos7);
