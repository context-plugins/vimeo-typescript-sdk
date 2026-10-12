import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status12Schema, type Status12 } from "./status12.js";

/**
 * Information about the event's pre-live video, where applicable. A pre-live video is either
 * activated or in the process of being activated.
 */
export type PreLiveVideo = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /**
   * The status of the pre-live video's RTMP link.
   *
   * Option descriptions:
   *  * `pending` - Vimeo is working on setting up the connection.
   *  * `ready` - Resources have been provisioned for the event.
   *  * `streaming` - Live video is currently streaming to the RTMP link.
   *  * `unavailable` - The connection is ready, but streaming to the RTMP link has not yet begun.
   */
  status: Status12;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const preLiveVideoSchema: Schema<PreLiveVideo> = s.object<PreLiveVideo>({
  options: s.array(s.string()),
  status: status12Schema,
  uri: s.string(),
});
