import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OttDestination = {
  id: string;
  ottChannelId: number;
  ottChannelName: string;
  ottChannelSubdomain: string;
  ottEventId: number;
  recurringLiveEventId: number;
};

export const ottDestinationSchema: Schema<OttDestination> = s.object<OttDestination>({
  id: s.string(),
  ottChannelId: s.number(),
  ottChannelName: s.string(),
  ottChannelSubdomain: s.string(),
  ottEventId: s.number(),
  recurringLiveEventId: s.number(),
  _keysMap: {
    ottChannelId: "ott_channel_id",
    ottChannelName: "ott_channel_name",
    ottChannelSubdomain: "ott_channel_subdomain",
    ottEventId: "ott_event_id",
    recurringLiveEventId: "recurring_live_event_id",
  },
});
