import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { segment1Schema, type Segment1 } from "./segment1.js";

export type VideosAiTexttracksRequest = {
  /** The segments to edit. */
  segments?: Segment1[];
};

export const videosAiTexttracksRequestSchema: Schema<VideosAiTexttracksRequest> =
  s.object<VideosAiTexttracksRequest>({
    segments: s.optional(s.array(s.lazy(() => segment1Schema))),
  });
