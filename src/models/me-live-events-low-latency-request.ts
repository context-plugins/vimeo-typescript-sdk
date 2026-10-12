import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MeLiveEventsLowLatencyRequest = {
  /** Whether the event is low latency. */
  lowLatency?: boolean;
};

export const meLiveEventsLowLatencyRequestSchema: Schema<MeLiveEventsLowLatencyRequest> =
  s.object<MeLiveEventsLowLatencyRequest>({
    lowLatency: s.optional(s.boolean()),
    _keysMap: {
      lowLatency: "low_latency",
    },
  });
