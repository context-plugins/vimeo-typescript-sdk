import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The video's 360 spatial projection.
 *
 * Option descriptions:
 *  * `cubical` - The spatial projection is cubical.
 *  * `cylindrical` - The spatial projection is cylindrical.
 *  * `dome` - The spatial projection is dome-shaped.
 *  * `equirectangular` - The spatial projection is equirectangular.
 *  * `pyramid` - The spatial projection is pyramid-shaped.
 */
export const Projection = {
  Cubical: "cubical",
  Cylindrical: "cylindrical",
  Dome: "dome",
  Equirectangular: "equirectangular",
  Pyramid: "pyramid",
} as const;
export type Projection = (typeof Projection)[keyof typeof Projection] | (string & {});

export const projectionSchema: EnumSchema<Projection> = s.enumOf<Projection>(Projection);
