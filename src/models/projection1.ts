import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The 360 spatial projection.
 *
 * Option descriptions:
 *  * `cubical` - Use cubical projection.
 *  * `cylindrical` - Use cylindrical projection.
 *  * `dome` - Use dome projection.
 *  * `equirectangular` - Use equirectangular projection.
 *  * `pyramid` - Use pyramid projection.
 */
export const Projection1 = {
  Cubical: "cubical",
  Cylindrical: "cylindrical",
  Dome: "dome",
  Equirectangular: "equirectangular",
  Pyramid: "pyramid",
} as const;
export type Projection1 = (typeof Projection1)[keyof typeof Projection1] | (string & {});

export const projection1Schema: EnumSchema<Projection1> = s.enumOf<Projection1>(Projection1);
