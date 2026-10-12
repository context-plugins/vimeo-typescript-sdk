import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { privacy9Schema, type Privacy9 } from "./privacy9.js";
import { serviceName1Schema, type ServiceName1 } from "./service-name1.js";
import { type19Schema, type Type19 } from "./type19.js";

export type UsersLiveEventsDestinationsRequest = {
  /** The title to display for the simulcast. */
  displayName: string;
  /** Whether the destination is enabled for simulcasting. */
  isEnabled?: boolean;
  /**
   * The privacy setting of the destination. Be sure to choose a value that corresponds to your
   * service.
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
  privacy?: Privacy9;
  /**
   * The ID of the destination on the specified service, such as the YouTube channel ID or the
   * Facebook page ID.
   */
  providerDestinationId?: string;
  /** The ID of the scheduled video. */
  providerVideoId?: string | null;
  /** The time in Unix timestamp format when live streaming is scheduled to start. */
  scheduledAt?: number;
  /**
   * The service to simulcast to.
   *
   * Option descriptions:
   *  * `custom_rtmp` - Simulcast to a custom service.
   *  * `facebook` - Simulcast to Facebook Live.
   *  * `linkedin` - Simulcast to LinkedIn Live.
   *  * `youtube` - Simulcast to YouTube Live.
   */
  serviceName: ServiceName1;
  /** The RTMP stream key. */
  streamKey?: string;
  /** The RTMP URL for receiving the video stream. */
  streamUrl?: string;
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
};

export const usersLiveEventsDestinationsRequestSchema: Schema<UsersLiveEventsDestinationsRequest> =
  s.object<UsersLiveEventsDestinationsRequest>({
    displayName: s.string(),
    isEnabled: s.optional(s.boolean()),
    privacy: s.optional(s.lazy(() => privacy9Schema)),
    providerDestinationId: s.optional(s.string()),
    providerVideoId: s.optionalNullable(s.string()),
    scheduledAt: s.optional(s.float64()),
    serviceName: serviceName1Schema,
    streamKey: s.optional(s.string()),
    streamUrl: s.optional(s.string()),
    type: type19Schema,
    _keysMap: {
      displayName: "display_name",
      isEnabled: "is_enabled",
      providerDestinationId: "provider_destination_id",
      providerVideoId: "provider_video_id",
      scheduledAt: "scheduled_at",
      serviceName: "service_name",
      streamKey: "stream_key",
      streamUrl: "stream_url",
    },
  });
