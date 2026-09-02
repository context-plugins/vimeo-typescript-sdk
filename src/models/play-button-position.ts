import { s, type EnumSchema } from "../core/index.js";

export const PlayButtonPosition = {
  _0: "0",
  _1: "1",
  _2: "2",
} as const;
export type PlayButtonPosition = (typeof PlayButtonPosition)[keyof typeof PlayButtonPosition] | (string & {});

export const playButtonPositionSchema: EnumSchema<PlayButtonPosition> =
  s.enumOf<PlayButtonPosition>(PlayButtonPosition);
