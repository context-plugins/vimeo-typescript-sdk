import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EventSchedule = {
  /** The time in ISO 8601 format when the event is expected to end. */
  endTime?: string;
  /**
   * The recurrence rule for the event's schedule according to [RFC
   * 5545](https://datatracker.ietf.org/doc/html/rfc5545).
   */
  rrule?: string;
  /** The time in ISO 8601 format when the event is expected to be live. */
  startTime?: string;
  /** The time zone of the event. */
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
