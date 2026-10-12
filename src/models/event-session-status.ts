import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { archiveSchema, type Archive } from "./archive.js";
import { ingestSchema, type Ingest } from "./ingest.js";
import { meteringSchema, type Metering } from "./metering.js";
import { status15Schema, type Status15 } from "./status15.js";
import { streamModeSchema, type StreamMode } from "./stream-mode.js";

export type EventSessionStatus = {
  /** Information about the archive data. */
  archive: Archive;
  /** Whether the current user can manage the event. */
  canManage: boolean;
  /** The ID of the live video. */
  id: number;
  /** The ingest of the video. */
  ingest: Ingest;
  /** The metering status of the live video. */
  metering: Metering;
  /**
   * The status of the event.
   *
   * Option descriptions:
   *  * `ended` - The event has ended.
   *  * `started` - The event has started.
   */
  status: Status15 | null;
  /**
   * The stream mode of the event.
   *
   * Option descriptions:
   *  * `live` - The stream is live playback.
   *  * `record` - The stream is in record mode.
   *  * `simulive` - The stream is scheduled media playback.
   */
  streamMode: StreamMode;
};

export const eventSessionStatusSchema: Schema<EventSessionStatus> = s.object<EventSessionStatus>({
  archive: archiveSchema,
  canManage: s.boolean(),
  id: s.float64(),
  ingest: ingestSchema,
  metering: meteringSchema,
  status: s.nullable(s.lazy(() => status15Schema)),
  streamMode: streamModeSchema,
  _keysMap: {
    canManage: "can_manage",
    streamMode: "stream_mode",
  },
});
