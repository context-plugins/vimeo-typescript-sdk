import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type16Schema, type Type16 } from "./type16.js";

export type Graphic = {
  /** The unique identifier of the graphic item. */
  id: string;
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
  type: Type16;
};

export const graphicSchema: Schema<Graphic> = s.object<Graphic>({
  id: s.string(),
  type: type16Schema,
});
