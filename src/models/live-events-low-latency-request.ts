import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LiveEventsLowLatencyRequest = {
  /** Whether the event is low latency. */
  lowLatency?: boolean;
};

export const liveEventsLowLatencyRequestSchema: Schema<LiveEventsLowLatencyRequest> =
  s.object<LiveEventsLowLatencyRequest>({
    lowLatency: s.optional(s.boolean()),
    _keysMap: {
      lowLatency: "low_latency",
    },
  });
