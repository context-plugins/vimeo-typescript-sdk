import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the video's AI content. */
export type AiContent = {
  /** Whether the video contains AI-generated audio. */
  audio?: boolean;
  /** Whether the video contains AI-generated audio that is marked automatically. */
  audioAuto?: boolean;
  /** Whether the video contains AI-generated visuals. */
  visual?: boolean;
  /** Whether the video contains AI-generated visuals that are marked automatically. */
  visualAuto?: boolean;
};

export const aiContentSchema: Schema<AiContent> = s.object<AiContent>({
  audio: s.optional(s.boolean()),
  audioAuto: s.optional(s.boolean()),
  visual: s.optional(s.boolean()),
  visualAuto: s.optional(s.boolean()),
  _keysMap: {
    audioAuto: "audio_auto",
    visualAuto: "visual_auto",
  },
});
