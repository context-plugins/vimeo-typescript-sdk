import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Filter13 = {
  Online: "online",
} as const;
export type Filter13 = (typeof Filter13)[keyof typeof Filter13] | (string & {});

export const filter13Schema: EnumSchema<Filter13> = s.enumOf<Filter13>(Filter13);
