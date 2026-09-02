import { s, type Schema } from "../core/index.js";

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
