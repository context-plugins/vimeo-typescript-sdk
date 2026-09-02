import { s, type Schema } from "../core/index.js";

export type DirectorTimeline1 = {
  pitch: number;
  roll?: number;
  timeCode: number;
  yaw: number;
};

export const directorTimeline1Schema: Schema<DirectorTimeline1> = s.object<DirectorTimeline1>({
  pitch: s.number(),
  roll: s.optional(s.number()),
  timeCode: s.number(),
  yaw: s.number(),
  _keysMap: {
    timeCode: "time_code",
  },
});
