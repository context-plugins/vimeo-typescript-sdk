import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of event.
 *
 * Option descriptions:
 *  * `default` - The event type is a regular recurring event.
 *  * `venue` - The event type is a venue.
 */
export const EventType = {
  Default: "default",
  Venue: "venue",
} as const;
export type EventType = (typeof EventType)[keyof typeof EventType] | (string & {});

export const eventTypeSchema: EnumSchema<EventType> = s.enumOf<EventType>(EventType);
