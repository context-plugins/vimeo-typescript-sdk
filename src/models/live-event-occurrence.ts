import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { recurringEventSchema, type RecurringEvent } from "./recurring-event.js";

export type LiveEventOccurrence = {
  /** The end time of this occurrence in ISO 8601 format. */
  endTime: string | null;
  /**
   * The full live event resource that owns this occurrence. Use sub-fields (e.g.
   * `event.parentFolder`, `event.pictures`, `event.metadata.interactions.delete`) to opt into
   * specific event data without paying for the full event payload.
   */
  event: RecurringEvent | null;
  /** The title of the live event. */
  eventTitle: string;
  /** The type of the live event. */
  eventType: string;
  /** The URI of the parent live event. */
  eventUri: string;
  /** Whether the event has registration enabled. */
  hasRegistration: boolean;
  /** The URI to access the event on Vimeo. */
  link: string;
  /** The URI to access the event settings. */
  settingsLink: string | null;
  /** The start time of this occurrence in ISO 8601 format. */
  startTime: string;
  /** The status of the live event. */
  status: string;
  /** The thumbnail URL of the live event. */
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
