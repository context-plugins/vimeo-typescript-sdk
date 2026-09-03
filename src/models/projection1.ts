import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Projection1 = {
  Cubical: "cubical",
  Cylindrical: "cylindrical",
  Dome: "dome",
  Equirectangular: "equirectangular",
  Pyramid: "pyramid",
} as const;
export type Projection1 = (typeof Projection1)[keyof typeof Projection1] | (string & {});

export const projection1Schema: EnumSchema<Projection1> = s.enumOf<Projection1>(Projection1);
