import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LiveEventsComposerScenesRequest = {
  /** The type of scene to create. Defaults to `live`. */
  sceneType?: string;
};

export const liveEventsComposerScenesRequestSchema: Schema<LiveEventsComposerScenesRequest> =
  s.object<LiveEventsComposerScenesRequest>({
    sceneType: s.optional(s.string()),
    _keysMap: {
      sceneType: "scene_type",
    },
  });
