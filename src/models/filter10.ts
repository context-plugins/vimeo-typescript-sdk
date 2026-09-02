import { s, type EnumSchema } from "../core/index.js";

export const Filter10 = {
  Embeddable: "embeddable",
  Playable: "playable",
} as const;
export type Filter10 = (typeof Filter10)[keyof typeof Filter10] | (string & {});

export const filter10Schema: EnumSchema<Filter10> = s.enumOf<Filter10>(Filter10);
