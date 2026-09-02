import { s, type EnumSchema } from "../core/index.js";

export const EventType = {
  Default: "default",
  Venue: "venue",
} as const;
export type EventType = (typeof EventType)[keyof typeof EventType] | (string & {});

export const eventTypeSchema: EnumSchema<EventType> = s.enumOf<EventType>(EventType);
