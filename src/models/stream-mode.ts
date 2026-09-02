import { s, type EnumSchema } from "../core/index.js";

export const StreamMode = {
  Live: "live",
  Record: "record",
  Simulive: "simulive",
} as const;
export type StreamMode = (typeof StreamMode)[keyof typeof StreamMode] | (string & {});

export const streamModeSchema: EnumSchema<StreamMode> = s.enumOf<StreamMode>(StreamMode);
