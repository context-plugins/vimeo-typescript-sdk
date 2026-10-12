import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { directorTimeline1Schema, type DirectorTimeline1 } from "./director-timeline1.js";
import { projection1Schema, type Projection1 } from "./projection1.js";
import { stereoFormat1Schema, type StereoFormat1 } from "./stereo-format1.js";

export type Spatial1 = {
  /** An array representing the 360 director timeline. */
  directorTimeline?: DirectorTimeline1[];
  /** The 360 field of view. This value must be between `30` and `90`; the default value is `50`. */
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

export const spatial1Schema: Schema<Spatial1> = s.object<Spatial1>({
  directorTimeline: s.optional(s.array(s.lazy(() => directorTimeline1Schema))),
  fieldOfView: s.optional(s.float64()),
  projection: s.optional(s.lazy(() => projection1Schema)),
  stereoFormat: s.optional(s.lazy(() => stereoFormat1Schema)),
  _keysMap: {
    directorTimeline: "director_timeline",
    fieldOfView: "field_of_view",
    stereoFormat: "stereo_format",
  },
});
