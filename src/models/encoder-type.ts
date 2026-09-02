import { s, type EnumSchema } from "../core/index.js";

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
