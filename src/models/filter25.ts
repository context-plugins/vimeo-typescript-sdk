import { s, type EnumSchema } from "../core/index.js";

export const Filter25 = {
  Extra: "extra",
  Main: "main",
  Trailer: "trailer",
} as const;
export type Filter25 = (typeof Filter25)[keyof typeof Filter25] | (string & {});

export const filter25Schema: EnumSchema<Filter25> = s.enumOf<Filter25>(Filter25);
