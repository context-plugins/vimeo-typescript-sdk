import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const View5 = {
  Anybody: "anybody",
  Members: "members",
} as const;
export type View5 = (typeof View5)[keyof typeof View5] | (string & {});

export const view5Schema: EnumSchema<View5> = s.enumOf<View5>(View5);
