import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LiveEventsRequest = {
  events: string[];
};

export const liveEventsRequestSchema: Schema<LiveEventsRequest> = s.object<LiveEventsRequest>({
  events: s.array(s.string()),
});
