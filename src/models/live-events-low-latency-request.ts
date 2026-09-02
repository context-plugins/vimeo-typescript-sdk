import { s, type Schema } from "../core/index.js";

export type LiveEventsLowLatencyRequest = {
  lowLatency?: boolean;
};

export const liveEventsLowLatencyRequestSchema: Schema<LiveEventsLowLatencyRequest> =
  s.object<LiveEventsLowLatencyRequest>({
    lowLatency: s.optional(s.boolean()),
    _keysMap: {
      lowLatency: "low_latency",
    },
  });
