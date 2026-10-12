import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metadata16Schema, type Metadata16 } from "./metadata16.js";
import { privacy6Schema, type Privacy6 } from "./privacy6.js";
import { serviceNameSchema, type ServiceName } from "./service-name.js";
import { stateSchema, type State } from "./state.js";
import { type19Schema, type Type19 } from "./type19.js";

export type EventDestination = {
  /** The name of the destination target, whether a page, profile name, or the like. */
  displayName: string;
  /** The ID of the destination. */
  id: number;
  /** Whether the destination is enabled. */
  isEnabled: boolean;
  /** The ID of the live video. */
  liveClipId: number;
  /** Metadata about the event destination. */
  metadata: Metadata16;
  /**
   * The privacy setting of the destination.
   *
   * Option descriptions:
   *  * `CONNECTIONS` - The privacy setting is `CONNECTIONS` for LinkedIn.
   *  * `PUBLIC` - The privacy setting is `PUBLIC` for LinkedIn.
   *  * `all_friends` - The privacy setting is `all_friends` for Facebook.
   *  * `everyone` - The privacy setting is `everyone` for Facebook.
   *  * `private` - The privacy setting is `private` for YouTube.
   *  * `public` - The privacy setting is `public` for YouTube.
   *  * `self` - The privacy setting is `self` for Facebook.
   *  * `unlisted` - The privacy setting is `unlisted` for YouTube.
   */
  privacy: Privacy6 | null;
  /** The broadcast ID of the destination service. */
  providerBroadcastId: string | null;
  /** The destination ID of the destination service. */
  providerDestinationId: string | null;
  /** The user ID of the destination service. */
  providerUserId: string | null;
  /** The ID of the scheduled live video. */
  providerVideoId: string | null;
  /** The time in Unix timestamp format when live streaming is scheduled to start. */
  scheduledAt: number | null;
  /**
   * The name of the destination service.
   *
   * Option descriptions:
   *  * `custom_rtmp` - The destination service is custom RTMP.
   *  * `facebook` - The destination service is Facebook Live.
   *  * `linkedin` - The destination service is LinkedIn Live.
   *  * `youtube` - The destination service is YouTube Live.
   */
  serviceName: ServiceName;
  /**
   * The status of the destination.
   *
   * Option descriptions:
   *  * `0` - The status is OK.
   *  * `1` - An error occurred. Check the `state_message` field for details.
   */
  state: State;
  /** The message that describes the state of the destination. */
  stateMessage: string | null;
  /** The stream key for the simulcast destination. */
  streamKey: string | null;
  /** The RTMP URL to stream to. */
  streamUrl: string | null;
  /**
   * The type of the simulcast destination.
   *
   * Option descriptions:
   *  * `channel` - The destination is a YouTube channel.
   *  * `custom` - The destination is custom.
   *  * `organization` - The destination is a LinkedIn organization.
   *  * `page` - The destination is a Facebook page.
   *  * `profile` - The destination is a Facebook or LinkedIn profile.
   */
  type: Type19;
  /** The name of the destination's owner. */
  userDisplayName: string;
  /** The ID of the destination's owner. */
  userId: number;
};

export const eventDestinationSchema: Schema<EventDestination> = s.object<EventDestination>({
  displayName: s.string(),
  id: s.float64(),
  isEnabled: s.boolean(),
  liveClipId: s.float64(),
  metadata: metadata16Schema,
  privacy: s.nullable(s.lazy(() => privacy6Schema)),
  providerBroadcastId: s.nullable(s.string()),
  providerDestinationId: s.nullable(s.string()),
  providerUserId: s.nullable(s.string()),
  providerVideoId: s.nullable(s.string()),
  scheduledAt: s.nullable(s.float64()),
  serviceName: serviceNameSchema,
  state: stateSchema,
  stateMessage: s.nullable(s.string()),
  streamKey: s.nullable(s.string()),
  streamUrl: s.nullable(s.string()),
  type: type19Schema,
  userDisplayName: s.string(),
  userId: s.float64(),
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
