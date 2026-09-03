import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Videos7 = {
  All: "all",
  Members: "members",
} as const;
export type Videos7 = (typeof Videos7)[keyof typeof Videos7] | (string & {});

export const videos7Schema: EnumSchema<Videos7> = s.enumOf<Videos7>(Videos7);
