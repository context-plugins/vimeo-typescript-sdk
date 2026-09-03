import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Projection = {
  Cubical: "cubical",
  Cylindrical: "cylindrical",
  Dome: "dome",
  Equirectangular: "equirectangular",
  Pyramid: "pyramid",
} as const;
export type Projection = (typeof Projection)[keyof typeof Projection] | (string & {});

export const projectionSchema: EnumSchema<Projection> = s.enumOf<Projection>(Projection);
