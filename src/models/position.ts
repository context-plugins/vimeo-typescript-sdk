import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Position = {
  Auto: "auto",
  Bottom: "bottom",
  Center: "center",
} as const;
export type Position = (typeof Position)[keyof typeof Position] | (string & {});

export const positionSchema: EnumSchema<Position> = s.enumOf<Position>(Position);
