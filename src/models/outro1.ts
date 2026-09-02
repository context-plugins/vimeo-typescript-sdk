import { s, type EnumSchema } from "../core/index.js";

export const Outro1 = {
  Nothing: "nothing",
} as const;
export type Outro1 = (typeof Outro1)[keyof typeof Outro1] | (string & {});

export const outro1Schema: EnumSchema<Outro1> = s.enumOf<Outro1>(Outro1);
