import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metadata16Schema, type Metadata16 } from "./metadata16.js";
import { privacy6Schema, type Privacy6 } from "./privacy6.js";
import { serviceNameSchema, type ServiceName } from "./service-name.js";
import { stateSchema, type State } from "./state.js";
import { type19Schema, type Type19 } from "./type19.js";

export type EventDestination = {
  displayName: string;
  id: number;
  isEnabled: boolean;
  liveClipId: number;
  metadata: Metadata16;
  privacy: Privacy6 | null;
  providerBroadcastId: string | null;
  providerDestinationId: string | null;
  providerUserId: string | null;
  providerVideoId: string | null;
  scheduledAt: number | null;
  serviceName: ServiceName;
  state: State;
  stateMessage: string | null;
  streamKey: string | null;
  streamUrl: string | null;
  type: Type19;
  userDisplayName: string;
  userId: number;
};

export const eventDestinationSchema: Schema<EventDestination> = s.object<EventDestination>({
  displayName: s.string(),
  id: s.number(),
  isEnabled: s.boolean(),
  liveClipId: s.number(),
  metadata: metadata16Schema,
  privacy: s.nullable(s.lazy(() => privacy6Schema)),
  providerBroadcastId: s.nullable(s.string()),
  providerDestinationId: s.nullable(s.string()),
  providerUserId: s.nullable(s.string()),
  providerVideoId: s.nullable(s.string()),
  scheduledAt: s.nullable(s.number()),
  serviceName: serviceNameSchema,
  state: stateSchema,
  stateMessage: s.nullable(s.string()),
  streamKey: s.nullable(s.string()),
  streamUrl: s.nullable(s.string()),
  type: type19Schema,
  userDisplayName: s.string(),
  userId: s.number(),
  _keysMap: {
    displayName: "display_name",
    isEnabled: "is_enabled",
    liveClipId: "live_clip_id",
    providerBroadcastId: "provider_broadcast_id",
    providerDestinationId: "provider_destination_id",
    providerUserId: "provider_user_id",
    providerVideoId: "provider_video_id",
    scheduledAt: "scheduled_at",
    serviceName: "service_name",
    stateMessage: "state_message",
    streamKey: "stream_key",
    streamUrl: "stream_url",
    userDisplayName: "user_display_name",
    userId: "user_id",
  },
});
