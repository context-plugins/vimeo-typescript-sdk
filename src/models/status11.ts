import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the live video's RTMP link.
 *
 * Option descriptions:
 *  * `streaming` - The stream is open and receiving content.
 */
export const Status11 = {
  Streaming: "streaming",
} as const;
export type Status11 = (typeof Status11)[keyof typeof Status11] | (string & {});

export const status11Schema: EnumSchema<Status11> = s.enumOf<Status11>(Status11);
