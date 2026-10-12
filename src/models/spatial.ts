import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { directorTimelineSchema, type DirectorTimeline } from "./director-timeline.js";
import { projectionSchema, type Projection } from "./projection.js";
import { stereoFormatSchema, type StereoFormat } from "./stereo-format.js";

/** The video's 360 spatial data. */
export type Spatial = {
  /** The video's 360 director timeline. */
  directorTimeline?: DirectorTimeline[];
  /**
   * The video's 360 field of view value, ranging from a mininum of `30` to a maximum of `90`. The
   * default value is `50`.
   */
  fieldOfView?: number | null;
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
  projection?: Projection | null;
  /**
   * The video's 360 stereo format.
   *
   * Option descriptions:
   *  * `left-right` - The stereo format is left-right.
   *  * `mono` - The audio is monaural.
   *  * `top-bottom` - The stereo format is top-bottom.
   */
  stereoFormat?: StereoFormat | null;
};

export const spatialSchema: Schema<Spatial> = s.object<Spatial>({
  directorTimeline: s.optional(s.array(s.lazy(() => directorTimelineSchema))),
  fieldOfView: s.optionalNullable(s.float64()),
  projection: s.optionalNullable(s.lazy(() => projectionSchema)),
  stereoFormat: s.optionalNullable(s.lazy(() => stereoFormatSchema)),
  _keysMap: {
    directorTimeline: "director_timeline",
    fieldOfView: "field_of_view",
    stereoFormat: "stereo_format",
  },
});
