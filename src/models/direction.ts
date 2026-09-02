import { s, type EnumSchema } from "../core/index.js";

export const Direction = {
  Asc: "asc",
  Desc: "desc",
} as const;
export type Direction = (typeof Direction)[keyof typeof Direction] | (string & {});

export const directionSchema: EnumSchema<Direction> = s.enumOf<Direction>(Direction);
