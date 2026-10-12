import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The streaming type of the video.
 *
 * Option descriptions:
 *  * `live` - The video is streamed in real time.
 *  * `non-live` - The video isn't streamed in real time.
 */
export const StreamingType = {
  Live: "live",
  NonLive: "non-live",
} as const;
export type StreamingType = (typeof StreamingType)[keyof typeof StreamingType] | (string & {});

export const streamingTypeSchema: EnumSchema<StreamingType> = s.enumOf<StreamingType>(StreamingType);
