import { s, type EnumSchema } from "../core/index.js";

export const Byline = {
  Hide: "hide",
  Show: "show",
  User: "user",
} as const;
export type Byline = (typeof Byline)[keyof typeof Byline] | (string & {});

export const bylineSchema: EnumSchema<Byline> = s.enumOf<Byline>(Byline);
