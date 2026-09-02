import { s, type Schema } from "../core/index.js";

export type ParentTextTrack = {
  options?: string[];
  uri?: string;
};

export const parentTextTrackSchema: Schema<ParentTextTrack> = s.object<ParentTextTrack>({
  options: s.optional(s.array(s.string())),
  uri: s.optional(s.string()),
});
