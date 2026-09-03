import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Sort48 = {
  ModifiedAsc: "modified_asc",
  ModifiedDesc: "modified_desc",
  TitleAsc: "title_asc",
  TitleDesc: "title_desc",
} as const;
export type Sort48 = (typeof Sort48)[keyof typeof Sort48] | (string & {});

export const sort48Schema: EnumSchema<Sort48> = s.enumOf<Sort48>(Sort48);
