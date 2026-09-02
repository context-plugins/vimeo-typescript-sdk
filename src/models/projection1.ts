import { s, type EnumSchema } from "../core/index.js";

export const Projection1 = {
  Cubical: "cubical",
  Cylindrical: "cylindrical",
  Dome: "dome",
  Equirectangular: "equirectangular",
  Pyramid: "pyramid",
} as const;
export type Projection1 = (typeof Projection1)[keyof typeof Projection1] | (string & {});

export const projection1Schema: EnumSchema<Projection1> = s.enumOf<Projection1>(Projection1);
