import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StreamMode = {
  Live: "live",
  Record: "record",
  Simulive: "simulive",
} as const;
export type StreamMode = (typeof StreamMode)[keyof typeof StreamMode] | (string & {});

export const streamModeSchema: EnumSchema<StreamMode> = s.enumOf<StreamMode>(StreamMode);
