import { s, type EnumSchema } from "../core/index.js";

export const State = {
  _0: "0",
  _1: "1",
} as const;
export type State = (typeof State)[keyof typeof State] | (string & {});

export const stateSchema: EnumSchema<State> = s.enumOf<State>(State);
