import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { archiveSchema, type Archive } from "./archive.js";
import { ingestSchema, type Ingest } from "./ingest.js";
import { meteringSchema, type Metering } from "./metering.js";
import { status13Schema, type Status13 } from "./status13.js";
import { streamModeSchema, type StreamMode } from "./stream-mode.js";

export type EventSessionStatus = {
  archive: Archive;
  canManage: boolean;
  id: number;
  ingest: Ingest;
  metering: Metering;
  status: Status13 | null;
  streamMode: StreamMode;
};

export const eventSessionStatusSchema: Schema<EventSessionStatus> = s.object<EventSessionStatus>({
  archive: archiveSchema,
  canManage: s.boolean(),
  id: s.number(),
  ingest: ingestSchema,
  metering: meteringSchema,
  status: s.nullable(s.lazy(() => status13Schema)),
  streamMode: streamModeSchema,
  _keysMap: {
    canManage: "can_manage",
    streamMode: "stream_mode",
  },
});
