import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { directorTimelineSchema, type DirectorTimeline } from "./director-timeline.js";
import { projectionSchema, type Projection } from "./projection.js";
import { stereoFormatSchema, type StereoFormat } from "./stereo-format.js";

export type Spatial = {
  directorTimeline?: DirectorTimeline[];
  fieldOfView?: number | null;
  projection?: Projection | null;
  stereoFormat?: StereoFormat | null;
};

export const spatialSchema: Schema<Spatial> = s.object<Spatial>({
  directorTimeline: s.optional(s.array(s.lazy(() => directorTimelineSchema))),
  fieldOfView: s.optionalNullable(s.number()),
  projection: s.optionalNullable(s.lazy(() => projectionSchema)),
  stereoFormat: s.optionalNullable(s.lazy(() => stereoFormatSchema)),
  _keysMap: {
    directorTimeline: "director_timeline",
    fieldOfView: "field_of_view",
    stereoFormat: "stereo_format",
  },
});
