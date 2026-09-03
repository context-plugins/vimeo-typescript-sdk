import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LiveEventsActivateRequest = {
  cloudComposingStreaming?: boolean;
  streamingStartRequested?: boolean;
};

export const liveEventsActivateRequestSchema: Schema<LiveEventsActivateRequest> =
  s.object<LiveEventsActivateRequest>({
    cloudComposingStreaming: s.optional(s.boolean()),
    streamingStartRequested: s.optional(s.boolean()),
    _keysMap: {
      cloudComposingStreaming: "cloud_composing_streaming",
      streamingStartRequested: "streaming_start_requested",
    },
  });
