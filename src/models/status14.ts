import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The ingest status of the live video.
 *
 * Option descriptions:
 *  * `0` - There’s a live video, but no RMTP URL or key.
 *  * `1` - There’s an RMTP URL and key, but the machine is provisioning.
 *  * `2` - There’s an RMTP URL and key, and the machine is provisioned, but the stream hasn’t
 *    started yet.
 *  * `3` - There’s an RMTP URL and key, and the machine is provisioned, but the stream didn’t start
 *    before the machine timed out.
 *  * `4` - The stream has started and is currently underway.
 *  * `5` - The stream has ended.
 */
export const Status14 = {
  _0: 0,
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
} as const;
export type Status14 = (typeof Status14)[keyof typeof Status14] | (number & {});

export const status14Schema: EnumSchema<Status14> = s.enumOf<Status14>(Status14);
