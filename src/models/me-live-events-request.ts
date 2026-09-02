import { s, type Schema } from "../core/index.js";

export type MeLiveEventsRequest = {
  events: string[];
};

export const meLiveEventsRequestSchema: Schema<MeLiveEventsRequest> = s.object<MeLiveEventsRequest>({
  events: s.array(s.string()),
});
