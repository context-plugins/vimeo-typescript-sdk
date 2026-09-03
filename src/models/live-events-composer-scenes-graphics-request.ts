import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LiveEventsComposerScenesGraphicsRequest = {
  item: Record<string, unknown>;
};

export const liveEventsComposerScenesGraphicsRequestSchema: Schema<LiveEventsComposerScenesGraphicsRequest> =
  s.object<LiveEventsComposerScenesGraphicsRequest>({
    item: s.record(s.string(), s.unknown()),
  });
