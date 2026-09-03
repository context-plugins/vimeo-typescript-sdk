import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Filter2 = {
  Moderators: "moderators",
} as const;
export type Filter2 = (typeof Filter2)[keyof typeof Filter2] | (string & {});

export const filter2Schema: EnumSchema<Filter2> = s.enumOf<Filter2>(Filter2);
