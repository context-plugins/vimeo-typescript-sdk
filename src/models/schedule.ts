import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the time or times that the event is expected to be live. */
export type Schedule = {
  /** The time in ISO 8601 format when the event is expected to end. */
  endTime?: string;
  /**
   * The recurrence rule for the event's schedule according to [RFC
   * 5545](https://datatracker.ietf.org/doc/html/rfc5545).
   */
  rrule?: string;
  /** The time in ISO 8601 format when the event is expected to be live. */
  startTime?: string;
  /** The time zone used in resolving the timestamps. */
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
