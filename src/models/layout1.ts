import { s, type EnumSchema } from "../core/index.js";

export const Layout1 = {
  Grid: "grid",
  Player: "player",
} as const;
export type Layout1 = (typeof Layout1)[keyof typeof Layout1] | (string & {});

export const layout1Schema: EnumSchema<Layout1> = s.enumOf<Layout1>(Layout1);
