import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
export const EncoderType = {
  Dash: "dash",
  Rtmp: "rtmp",
  SimpleLive: "simple_live",
  Srt: "srt",
  StudioCloud: "studio_cloud",
  Unknown: "unknown",
  Webrtc: "webrtc",
} as const;
export type EncoderType = (typeof EncoderType)[keyof typeof EncoderType] | (string & {});

export const encoderTypeSchema: EnumSchema<EncoderType> = s.enumOf<EncoderType>(EncoderType);
