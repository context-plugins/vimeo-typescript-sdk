import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { privacy9Schema, type Privacy9 } from "./privacy9.js";
import { serviceName1Schema, type ServiceName1 } from "./service-name1.js";
import { type19Schema, type Type19 } from "./type19.js";

export type UsersLiveEventsDestinationsRequest = {
  displayName: string;
  isEnabled?: boolean;
  privacy?: Privacy9;
  providerDestinationId?: string;
  providerVideoId?: string | null;
  scheduledAt?: number;
  serviceName: ServiceName1;
  streamKey?: string;
  streamUrl?: string;
  type: Type19;
};

export const usersLiveEventsDestinationsRequestSchema: Schema<UsersLiveEventsDestinationsRequest> =
  s.object<UsersLiveEventsDestinationsRequest>({
    displayName: s.string(),
    isEnabled: s.optional(s.boolean()),
    privacy: s.optional(s.lazy(() => privacy9Schema)),
    providerDestinationId: s.optional(s.string()),
    providerVideoId: s.optionalNullable(s.string()),
    scheduledAt: s.optional(s.number()),
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
