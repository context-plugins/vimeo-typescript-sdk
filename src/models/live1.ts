import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The associated live stream object. This data requires a bearer token with the `private` scope.
 */
export type Live1 = {
  /**
   * The time in ISO 8601 format when the live stream ended. This data requires a bearer token with
   * the `private` scope.
   */
  streamEndTime: string | null;
  /**
   * The time in ISO 8601 format when the live stream started. This data requires a bearer token
   * with the `private` scope.
   */
  streamStartTime: string | null;
};

export const live1Schema: Schema<Live1> = s.object<Live1>({
  streamEndTime: s.nullable(s.string()),
  streamStartTime: s.nullable(s.string()),
  _keysMap: {
    streamEndTime: "stream_end_time",
    streamStartTime: "stream_start_time",
  },
});
