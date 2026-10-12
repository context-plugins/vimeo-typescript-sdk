import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the pre-live video's RTMP link.
 *
 * Option descriptions:
 *  * `pending` - Vimeo is working on setting up the connection.
 *  * `ready` - Resources have been provisioned for the event.
 *  * `streaming` - Live video is currently streaming to the RTMP link.
 *  * `unavailable` - The connection is ready, but streaming to the RTMP link has not yet begun.
 */
export const Status12 = {
  Pending: "pending",
  Ready: "ready",
  Streaming: "streaming",
  Unavailable: "unavailable",
} as const;
export type Status12 = (typeof Status12)[keyof typeof Status12] | (string & {});

export const status12Schema: EnumSchema<Status12> = s.enumOf<Status12>(Status12);
