import { s, type EnumSchema } from "../core/index.js";

export const StreamingType = {
  Live: "live",
  NonLive: "non-live",
} as const;
export type StreamingType = (typeof StreamingType)[keyof typeof StreamingType] | (string & {});

export const streamingTypeSchema: EnumSchema<StreamingType> = s.enumOf<StreamingType>(StreamingType);
