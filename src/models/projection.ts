import { s, type EnumSchema } from "../core/index.js";

export const Projection = {
  Cubical: "cubical",
  Cylindrical: "cylindrical",
  Dome: "dome",
  Equirectangular: "equirectangular",
  Pyramid: "pyramid",
} as const;
export type Projection = (typeof Projection)[keyof typeof Projection] | (string & {});

export const projectionSchema: EnumSchema<Projection> = s.enumOf<Projection>(Projection);
