import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OttDestination = {
  /** The OTT destination's canonical relative URI. */
  id: string;
  /** The ID of the OTT channel. */
  ottChannelId: number;
  /** The name of the OTT channel. */
  ottChannelName: string;
  /** The subdomain of the OTT channel. */
  ottChannelSubdomain: string;
  /** The ID of the OTT event. */
  ottEventId: number;
  /** The ID of the current recurring event. */
  recurringLiveEventId: number;
};

export const ottDestinationSchema: Schema<OttDestination> = s.object<OttDestination>({
  id: s.string(),
  ottChannelId: s.float64(),
  ottChannelName: s.string(),
  ottChannelSubdomain: s.string(),
  ottEventId: s.float64(),
  recurringLiveEventId: s.float64(),
  _keysMap: {
    ottChannelId: "ott_channel_id",
    ottChannelName: "ott_channel_name",
    ottChannelSubdomain: "ott_channel_subdomain",
    ottEventId: "ott_event_id",
    recurringLiveEventId: "recurring_live_event_id",
  },
});
