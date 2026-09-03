import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { directorTimeline1Schema, type DirectorTimeline1 } from "./director-timeline1.js";
import { projection1Schema, type Projection1 } from "./projection1.js";
import { stereoFormat1Schema, type StereoFormat1 } from "./stereo-format1.js";

export type Spatial1 = {
  directorTimeline?: DirectorTimeline1[];
  fieldOfView?: number;
  projection?: Projection1;
  stereoFormat?: StereoFormat1;
};

export const spatial1Schema: Schema<Spatial1> = s.object<Spatial1>({
  directorTimeline: s.optional(s.array(s.lazy(() => directorTimeline1Schema))),
  fieldOfView: s.optional(s.number()),
  projection: s.optional(s.lazy(() => projection1Schema)),
  stereoFormat: s.optional(s.lazy(() => stereoFormat1Schema)),
  _keysMap: {
    directorTimeline: "director_timeline",
    fieldOfView: "field_of_view",
    stereoFormat: "stereo_format",
  },
});
