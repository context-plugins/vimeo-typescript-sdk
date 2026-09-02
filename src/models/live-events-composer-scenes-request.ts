import { s, type Schema } from "../core/index.js";

export type LiveEventsComposerScenesRequest = {
  sceneType?: string;
};

export const liveEventsComposerScenesRequestSchema: Schema<LiveEventsComposerScenesRequest> =
  s.object<LiveEventsComposerScenesRequest>({
    sceneType: s.optional(s.string()),
    _keysMap: {
      sceneType: "scene_type",
    },
  });
