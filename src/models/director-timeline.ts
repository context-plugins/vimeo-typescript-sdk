import { s, type Schema } from "../core/index.js";

export type DirectorTimeline = {
  pitch?: number;
  roll?: number;
  timeCode?: number;
  yaw?: number;
};

export const directorTimelineSchema: Schema<DirectorTimeline> = s.object<DirectorTimeline>({
  pitch: s.optional(s.number()),
  roll: s.optional(s.number()),
  timeCode: s.optional(s.number()),
  yaw: s.optional(s.number()),
  _keysMap: {
    timeCode: "time_code",
  },
});
