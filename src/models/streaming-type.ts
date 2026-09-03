import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StreamingType = {
  Live: "live",
  NonLive: "non-live",
} as const;
export type StreamingType = (typeof StreamingType)[keyof typeof StreamingType] | (string & {});

export const streamingTypeSchema: EnumSchema<StreamingType> = s.enumOf<StreamingType>(StreamingType);
