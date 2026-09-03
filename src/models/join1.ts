import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Join1 = {
  Anybody: "anybody",
  Members: "members",
} as const;
export type Join1 = (typeof Join1)[keyof typeof Join1] | (string & {});

export const join1Schema: EnumSchema<Join1> = s.enumOf<Join1>(Join1);
