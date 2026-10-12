import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Where the logo renders relative to the title. Null until the logo is enabled. */
export const Position1 = {
  Left: "left",
  Right: "right",
} as const;
export type Position1 = (typeof Position1)[keyof typeof Position1] | (string & {});

export const position1Schema: EnumSchema<Position1> = s.enumOf<Position1>(Position1);
