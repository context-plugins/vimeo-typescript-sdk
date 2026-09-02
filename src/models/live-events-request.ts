import { s, type Schema } from "../core/index.js";

export type LiveEventsRequest = {
  events: string[];
};

export const liveEventsRequestSchema: Schema<LiveEventsRequest> = s.object<LiveEventsRequest>({
  events: s.array(s.string()),
});
