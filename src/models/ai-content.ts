import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AiContent = {
  audio?: boolean;
  audioAuto?: boolean;
  visual?: boolean;
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
