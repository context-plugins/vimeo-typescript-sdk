import { s, type EnumSchema } from "../core/index.js";

export const Layout = {
  Grid: "grid",
  Player: "player",
} as const;
export type Layout = (typeof Layout)[keyof typeof Layout] | (string & {});

export const layoutSchema: EnumSchema<Layout> = s.enumOf<Layout>(Layout);
