import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Live = {
  /** Whether the video was streamed live. */
  archived: boolean;
  /** Whether the video is currently streaming live. */
  streaming: boolean;
};

export const liveSchema: Schema<Live> = s.object<Live>({
  archived: s.boolean(),
  streaming: s.boolean(),
});
