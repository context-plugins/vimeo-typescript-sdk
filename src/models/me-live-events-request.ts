import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MeLiveEventsRequest = {
  /** An array of event URIs. */
  events: string[];
};

export const meLiveEventsRequestSchema: Schema<MeLiveEventsRequest> = s.object<MeLiveEventsRequest>({
  events: s.array(s.string()),
});
