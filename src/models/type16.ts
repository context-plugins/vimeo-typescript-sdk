import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the graphic item.
 *
 * Option descriptions:
 *  * `agoraMedia` - A generic preloaded video or image.
 *  * `agoraScreen` - Shared screen content from an Agora user.
 *  * `agoraStream` - A live video feed from an Agora participant.
 *  * `broadcasterLowerthird` - The name and title for the main host.
 *  * `fullscreen` - A screen-filling informational graphic.
 *  * `guestLowerthird` - The name and title for a stream guest.
 *  * `logo` - A branding or emblem image.
 *  * `lowerthird` - The standard name and title text overlay.
 *  * `poll` - Audience voting content and results.
 *  * `qna` - Question and answer text display.
 *  * `slides` - Presentation slide content.
 */
export const Type16 = {
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
export type Type16 = (typeof Type16)[keyof typeof Type16] | (string & {});

export const type16Schema: EnumSchema<Type16> = s.enumOf<Type16>(Type16);
