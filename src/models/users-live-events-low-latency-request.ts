import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersLiveEventsLowLatencyRequest = {
  lowLatency?: boolean;
};

export const usersLiveEventsLowLatencyRequestSchema: Schema<UsersLiveEventsLowLatencyRequest> =
  s.object<UsersLiveEventsLowLatencyRequest>({
    lowLatency: s.optional(s.boolean()),
    _keysMap: {
      lowLatency: "low_latency",
    },
  });
