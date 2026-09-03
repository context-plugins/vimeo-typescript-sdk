import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type12 = {
  AgoraMedia: "agoraMedia",
  AgoraScreen: "agoraScreen",
  AgoraStream: "agoraStream",
  BroadcasterLowerthird: "broadcasterLowerthird",
  Fullscreen: "fullscreen",
  GuestLowerthird: "guestLowerthird",
  Logo: "logo",
  Lowerthird: "lowerthird",
  Poll: "poll",
  Qna: "qna",
  Slides: "slides",
} as const;
export type Type12 = (typeof Type12)[keyof typeof Type12] | (string & {});

export const type12Schema: EnumSchema<Type12> = s.enumOf<Type12>(Type12);
