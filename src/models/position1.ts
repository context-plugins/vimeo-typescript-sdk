import { s, type EnumSchema } from "../core/index.js";

export const Position1 = {
  Left: "left",
  Right: "right",
} as const;
export type Position1 = (typeof Position1)[keyof typeof Position1] | (string & {});

export const position1Schema: EnumSchema<Position1> = s.enumOf<Position1>(Position1);
