import { s, type Schema } from "../core/index.js";

export type MeLiveEventsLowLatencyRequest = {
  lowLatency?: boolean;
};

export const meLiveEventsLowLatencyRequestSchema: Schema<MeLiveEventsLowLatencyRequest> =
  s.object<MeLiveEventsLowLatencyRequest>({
    lowLatency: s.optional(s.boolean()),
    _keysMap: {
      lowLatency: "low_latency",
    },
  });
