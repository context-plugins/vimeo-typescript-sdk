import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ComposerGraphics = {
  createdAt: number;
  id: string;
  type: string;
  updatedAt: number;
  videoDuration: number;
  videoId: number;
  videoThumb: string;
  videoThumbFullSize: string;
};

export const composerGraphicsSchema: Schema<ComposerGraphics> = s.object<ComposerGraphics>({
  createdAt: s.number(),
  id: s.string(),
  type: s.string(),
  updatedAt: s.number(),
  videoDuration: s.number(),
  videoId: s.number(),
  videoThumb: s.string(),
  videoThumbFullSize: s.string(),
});
