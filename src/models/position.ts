import { s, type EnumSchema } from "../core/index.js";

export const Position = {
  Auto: "auto",
  Bottom: "bottom",
  Center: "center",
} as const;
export type Position = (typeof Position)[keyof typeof Position] | (string & {});

export const positionSchema: EnumSchema<Position> = s.enumOf<Position>(Position);
