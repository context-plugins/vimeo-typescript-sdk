import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Sort78 = {
  Default: "default",
} as const;
export type Sort78 = (typeof Sort78)[keyof typeof Sort78] | (string & {});

export const sort78Schema: EnumSchema<Sort78> = s.enumOf<Sort78>(Sort78);
