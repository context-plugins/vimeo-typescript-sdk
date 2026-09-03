import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { directorTimeline3Schema, type DirectorTimeline3 } from "./director-timeline3.js";
import { projection1Schema, type Projection1 } from "./projection1.js";
import { stereoFormat1Schema, type StereoFormat1 } from "./stereo-format1.js";

export type Spatial3 = {
  directorTimeline?: DirectorTimeline3[];
  fieldOfView?: number;
  projection?: Projection1;
  stereoFormat?: StereoFormat1;
};

export const spatial3Schema: Schema<Spatial3> = s.object<Spatial3>({
  directorTimeline: s.optional(s.array(s.lazy(() => directorTimeline3Schema))),
  fieldOfView: s.optional(s.number()),
  projection: s.optional(s.lazy(() => projection1Schema)),
  stereoFormat: s.optional(s.lazy(() => stereoFormat1Schema)),
  _keysMap: {
    directorTimeline: "director_timeline",
    fieldOfView: "field_of_view",
    stereoFormat: "stereo_format",
  },
});
