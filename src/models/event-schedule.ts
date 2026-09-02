import { s, type Schema } from "../core/index.js";

export type EventSchedule = {
  endTime?: string;
  rrule?: string;
  startTime?: string;
  timeZone?: string;
};

export const eventScheduleSchema: Schema<EventSchedule> = s.object<EventSchedule>({
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
