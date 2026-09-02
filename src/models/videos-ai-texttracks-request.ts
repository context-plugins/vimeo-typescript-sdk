import { s, type Schema } from "../core/index.js";
import { segment1Schema, type Segment1 } from "./segment1.js";

export type VideosAiTexttracksRequest = {
  segments?: Segment1[];
};

export const videosAiTexttracksRequestSchema: Schema<VideosAiTexttracksRequest> =
  s.object<VideosAiTexttracksRequest>({
    segments: s.optional(s.array(s.lazy(() => segment1Schema))),
  });
