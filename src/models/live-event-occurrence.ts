import { s, type Schema } from "../core/index.js";
import { recurringEventSchema, type RecurringEvent } from "./recurring-event.js";

export type LiveEventOccurrence = {
  endTime: string | null;
  event: RecurringEvent | null;
  eventTitle: string;
  eventType: string;
  eventUri: string;
  hasRegistration: boolean;
  link: string;
  settingsLink: string | null;
  startTime: string;
  status: string;
  thumbnail: string | null;
};

export const liveEventOccurrenceSchema: Schema<LiveEventOccurrence> = s.object<LiveEventOccurrence>({
  endTime: s.nullable(s.string()),
  event: s.nullable(s.lazy(() => recurringEventSchema)),
  eventTitle: s.string(),
  eventType: s.string(),
  eventUri: s.string(),
  hasRegistration: s.boolean(),
  link: s.string(),
  settingsLink: s.nullable(s.string()),
  startTime: s.string(),
  status: s.string(),
  thumbnail: s.nullable(s.string()),
  _keysMap: {
    endTime: "end_time",
    eventTitle: "event_title",
    eventType: "event_type",
    eventUri: "event_uri",
    hasRegistration: "has_registration",
    settingsLink: "settings_link",
    startTime: "start_time",
  },
});
