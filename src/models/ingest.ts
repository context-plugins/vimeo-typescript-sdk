import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { encoderTypeSchema, type EncoderType } from "./encoder-type.js";
import { status14Schema, type Status14 } from "./status14.js";

/** The ingest of the video. */
export type Ingest = {
  /**
   * The protocol used for this session.
   *
   * Option descriptions:
   *  * `dash` - The protocol is DASH.
   *  * `rtmp` - The protocol is RTMP.
   *  * `simple_live` - The protocol is Simplelive.
   *  * `srt` - The protocol is SRT.
   *  * `studio_cloud` - The protocol is StudioCloud.
   *  * `unknown` - The protocol is unknown or not set.
   *  * `webrtc` - The protocol is WebRTC.
   */
  encoderType: EncoderType;
  /** The timestamp in UTC format when the live stream ended. */
  endTime: number | null;
  /** The height of the live video in pixels. */
  height: number | null;
  /** Whether the session is using RTMP. */
  isRtmpSession: boolean;
  /** Whether the stream is scheduled media playback. */
  isScheduledPlayback: boolean | null;
  /** The time in ISO 8601 format when the RTMP expires. */
  rtmpExpiresAt: string | null;
  /**
   * The upstream RTMP link. Send your live content to this link to create a live video on the
   * event.
   */
  rtmpLink: string | null;
  /**
   * The upstream RTMPS link. Send your live content to this secure link to create a live video on
   * the event.
   */
  rtmpsLink: string | null;
  /** The scheduled start time of the live video in ISO 8601 format. */
  scheduledStartTime: string | null;
  /** The session ID. */
  sessionId: string | null;
  /** The timestamp in UTC format when the live video started. */
  startTime: number | null;
  /**
   * The ingest status of the live video.
   *
   * Option descriptions:
   *  * `0` - There’s a live video, but no RMTP URL or key.
   *  * `1` - There’s an RMTP URL and key, but the machine is provisioning.
   *  * `2` - There’s an RMTP URL and key, and the machine is provisioned, but the stream hasn’t
   *    started yet.
   *  * `3` - There’s an RMTP URL and key, and the machine is provisioned, but the stream didn’t
   *    start before the machine timed out.
   *  * `4` - The stream has started and is currently underway.
   *  * `5` - The stream has ended.
   */
  status: Status14 | null;
  /** The reason why the stream ended. If the stream hasn't ended, this field is empty. */
  streamEndedReason: number | null;
  /** The stream key used in conjunction with the RTMP and RTMPS links. */
  streamKey: string | null;
  /** The width of the live video in pixels. */
  width: number | null;
};

export const ingestSchema: Schema<Ingest> = s.object<Ingest>({
  encoderType: encoderTypeSchema,
  endTime: s.nullable(s.float64()),
  height: s.nullable(s.float64()),
  isRtmpSession: s.boolean(),
  isScheduledPlayback: s.nullable(s.boolean()),
  rtmpExpiresAt: s.nullable(s.string()),
  rtmpLink: s.nullable(s.string()),
  rtmpsLink: s.nullable(s.string()),
  scheduledStartTime: s.nullable(s.string()),
  sessionId: s.nullable(s.string()),
  startTime: s.nullable(s.float64()),
  status: s.nullable(s.lazy(() => status14Schema)),
  streamEndedReason: s.nullable(s.float64()),
  streamKey: s.nullable(s.string()),
  width: s.nullable(s.float64()),
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
