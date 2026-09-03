import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ParentTextTrack = {
  options?: string[];
  uri?: string;
};

export const parentTextTrackSchema: Schema<ParentTextTrack> = s.object<ParentTextTrack>({
  options: s.optional(s.array(s.string())),
  uri: s.optional(s.string()),
});
