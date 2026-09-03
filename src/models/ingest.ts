import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { encoderTypeSchema, type EncoderType } from "./encoder-type.js";
import { status14Schema, type Status14 } from "./status14.js";

export type Ingest = {
  encoderType: EncoderType;
  endTime: number | null;
  height: number | null;
  isRtmpSession: boolean;
  isScheduledPlayback: boolean | null;
  rtmpExpiresAt: string | null;
  rtmpLink: string | null;
  rtmpsLink: string | null;
  scheduledStartTime: string | null;
  sessionId: string | null;
  startTime: number | null;
  status: Status14 | null;
  streamEndedReason: number | null;
  streamKey: string | null;
  width: number | null;
};

export const ingestSchema: Schema<Ingest> = s.object<Ingest>({
  encoderType: encoderTypeSchema,
  endTime: s.nullable(s.number()),
  height: s.nullable(s.number()),
  isRtmpSession: s.boolean(),
  isScheduledPlayback: s.nullable(s.boolean()),
  rtmpExpiresAt: s.nullable(s.string()),
  rtmpLink: s.nullable(s.string()),
  rtmpsLink: s.nullable(s.string()),
  scheduledStartTime: s.nullable(s.string()),
  sessionId: s.nullable(s.string()),
  startTime: s.nullable(s.number()),
  status: s.nullable(s.lazy(() => status14Schema)),
  streamEndedReason: s.nullable(s.number()),
  streamKey: s.nullable(s.string()),
  width: s.nullable(s.number()),
  _keysMap: {
    encoderType: "encoder_type",
    endTime: "end_time",
    isRtmpSession: "is_rtmp_session",
    isScheduledPlayback: "is_scheduled_playback",
    rtmpExpiresAt: "rtmp_expires_at",
    rtmpLink: "rtmp_link",
    rtmpsLink: "rtmps_link",
    scheduledStartTime: "scheduled_start_time",
    sessionId: "session_id",
    startTime: "start_time",
    streamEndedReason: "stream_ended_reason",
    streamKey: "stream_key",
  },
});
