import { s, type Schema } from "../core/index.js";

export type Schedule = {
  endTime?: string;
  rrule?: string;
  startTime?: string;
  timeZone?: string;
};

export const scheduleSchema: Schema<Schedule> = s.object<Schedule>({
  endTime: s.optional(s.string()),
  rrule: s.optional(s.string()),
  startTime: s.optional(s.string()),
  timeZone: s.optional(s.string()),
  _keysMap: {
    endTime: "end_time",
    startTime: "start_time",
    timeZone: "time_zone",
  },
});
