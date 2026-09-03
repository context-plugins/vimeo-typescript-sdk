import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PlayButtonPosition = {
  _0: "0",
  _1: "1",
  _2: "2",
} as const;
export type PlayButtonPosition = (typeof PlayButtonPosition)[keyof typeof PlayButtonPosition] | (string & {});

export const playButtonPositionSchema: EnumSchema<PlayButtonPosition> =
  s.enumOf<PlayButtonPosition>(PlayButtonPosition);
