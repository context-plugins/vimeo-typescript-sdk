import { s, type EnumSchema } from "../core/index.js";

export const Filter3 = {
  Embeddable: "embeddable",
} as const;
export type Filter3 = (typeof Filter3)[keyof typeof Filter3] | (string & {});

export const filter3Schema: EnumSchema<Filter3> = s.enumOf<Filter3>(Filter3);
