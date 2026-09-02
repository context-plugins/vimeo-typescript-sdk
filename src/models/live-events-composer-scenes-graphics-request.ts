import { s, type Schema } from "../core/index.js";

export type LiveEventsComposerScenesGraphicsRequest = {
  item: Record<string, unknown>;
};

export const liveEventsComposerScenesGraphicsRequestSchema: Schema<LiveEventsComposerScenesGraphicsRequest> =
  s.object<LiveEventsComposerScenesGraphicsRequest>({
    item: s.record(s.string(), s.unknown()),
  });
