import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const View3 = {
  Anybody: "anybody",
  Nobody: "nobody",
  Team: "team",
} as const;
export type View3 = (typeof View3)[keyof typeof View3] | (string & {});

export const view3Schema: EnumSchema<View3> = s.enumOf<View3>(View3);
