import { s, type EnumSchema } from "../core/index.js";

export const Position2 = {
  Auto: "auto",
  Bottom: "bottom",
  Center: "center",
} as const;
export type Position2 = (typeof Position2)[keyof typeof Position2] | (string & {});

export const position2Schema: EnumSchema<Position2> = s.enumOf<Position2>(Position2);
