import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type4Schema, type Type4 } from "./type4.js";

export type EndScreen = {
  /**
   * How the embeddable player handles the end screen.
   *
   * Option descriptions:
   *  * `empty` - The end screen is empty.
   *  * `loop` - The end screen loops the video playback.
   *  * `share` - The end screen includes sharing options.
   *  * `thumbnail` - The end screen includes the thumbnail of the video.
   */
  type: Type4;
};

export const endScreenSchema: Schema<EndScreen> = s.object<EndScreen>({
  type: type4Schema,
});
