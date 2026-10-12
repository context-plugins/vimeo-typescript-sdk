import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { directorTimeline3Schema, type DirectorTimeline3 } from "./director-timeline3.js";
import { projection1Schema, type Projection1 } from "./projection1.js";
import { stereoFormat1Schema, type StereoFormat1 } from "./stereo-format1.js";

export type Spatial3 = {
  /** An array representing the 360 director timeline. */
  directorTimeline?: DirectorTimeline3[];
  /** The 360 field of view. This value must be between 30 and 90. The default is 50. */
  fieldOfView?: number;
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
  projection?: Projection1;
  /**
   * The 360 spatial stereo format.
   *
   * Option descriptions:
   *  * `left-right` - Use left-right stereo.
   *  * `mono` - Use monaural audio.
   *  * `top-bottom` - Use top-bottom stereo.
   */
  stereoFormat?: StereoFormat1;
};

export const spatial3Schema: Schema<Spatial3> = s.object<Spatial3>({
  directorTimeline: s.optional(s.array(s.lazy(() => directorTimeline3Schema))),
  fieldOfView: s.optional(s.float64()),
  projection: s.optional(s.lazy(() => projection1Schema)),
  stereoFormat: s.optional(s.lazy(() => stereoFormat1Schema)),
  _keysMap: {
    directorTimeline: "director_timeline",
    fieldOfView: "field_of_view",
    stereoFormat: "stereo_format",
  },
});
