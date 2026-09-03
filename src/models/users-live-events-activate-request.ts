import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersLiveEventsActivateRequest = {
  cloudComposingStreaming?: boolean;
  streamingStartRequested?: boolean;
};

export const usersLiveEventsActivateRequestSchema: Schema<UsersLiveEventsActivateRequest> =
  s.object<UsersLiveEventsActivateRequest>({
    cloudComposingStreaming: s.optional(s.boolean()),
    streamingStartRequested: s.optional(s.boolean()),
    _keysMap: {
      cloudComposingStreaming: "cloud_composing_streaming",
      streamingStartRequested: "streaming_start_requested",
    },
  });
