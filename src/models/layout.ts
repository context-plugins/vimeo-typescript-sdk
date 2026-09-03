import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Layout = {
  Grid: "grid",
  Player: "player",
} as const;
export type Layout = (typeof Layout)[keyof typeof Layout] | (string & {});

export const layoutSchema: EnumSchema<Layout> = s.enumOf<Layout>(Layout);
