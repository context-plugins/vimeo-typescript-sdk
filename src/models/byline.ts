import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Byline = {
  Hide: "hide",
  Show: "show",
  User: "user",
} as const;
export type Byline = (typeof Byline)[keyof typeof Byline] | (string & {});

export const bylineSchema: EnumSchema<Byline> = s.enumOf<Byline>(Byline);
