import { s, type EnumSchema } from "../core/index.js";

export const Rendition2 = {
  Source: "source",
} as const;
export type Rendition2 = (typeof Rendition2)[keyof typeof Rendition2] | (string & {});

export const rendition2Schema: EnumSchema<Rendition2> = s.enumOf<Rendition2>(Rendition2);
