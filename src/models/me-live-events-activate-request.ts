import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MeLiveEventsActivateRequest = {
  cloudComposingStreaming?: boolean;
  streamingStartRequested?: boolean;
};

export const meLiveEventsActivateRequestSchema: Schema<MeLiveEventsActivateRequest> =
  s.object<MeLiveEventsActivateRequest>({
    cloudComposingStreaming: s.optional(s.boolean()),
    streamingStartRequested: s.optional(s.boolean()),
    _keysMap: {
      cloudComposingStreaming: "cloud_composing_streaming",
      streamingStartRequested: "streaming_start_requested",
    },
  });
