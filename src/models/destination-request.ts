import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { privacy9Schema, type Privacy9 } from "./privacy9.js";
import { serviceName1Schema, type ServiceName1 } from "./service-name1.js";
import { type19Schema, type Type19 } from "./type19.js";

export type DestinationRequest = {
  displayName?: string;
  isEnabled?: boolean;
  privacy?: Privacy9;
  providerDestinationId?: string;
  serviceName?: ServiceName1;
  streamKey?: string;
  streamUrl?: string;
  type?: Type19;
};

export const destinationRequestSchema: Schema<DestinationRequest> = s.object<DestinationRequest>({
  displayName: s.optional(s.string()),
  isEnabled: s.optional(s.boolean()),
  privacy: s.optional(s.lazy(() => privacy9Schema)),
  providerDestinationId: s.optional(s.string()),
  serviceName: s.optional(s.lazy(() => serviceName1Schema)),
  streamKey: s.optional(s.string()),
  streamUrl: s.optional(s.string()),
  type: s.optional(s.lazy(() => type19Schema)),
  _keysMap: {
    displayName: "display_name",
    isEnabled: "is_enabled",
    providerDestinationId: "provider_destination_id",
    serviceName: "service_name",
    streamKey: "stream_key",
    streamUrl: "stream_url",
  },
});
