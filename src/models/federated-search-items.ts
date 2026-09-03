import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { albumSchema, type Album } from "./album.js";
import { projectSchema, type Project } from "./project.js";
import { recurringEventSchema, type RecurringEvent } from "./recurring-event.js";
import { type17Schema, type Type17 } from "./type17.js";
import { videoSchema, type Video } from "./video.js";

export type FederatedSearchItems = {
  folder?: Project;
  liveEvent?: RecurringEvent;
  showcase?: Album;
  type: Type17;
  video?: Video;
};

export const federatedSearchItemsSchema: Schema<FederatedSearchItems> = s.object<FederatedSearchItems>({
  folder: s.optional(s.lazy(() => projectSchema)),
  liveEvent: s.optional(s.lazy(() => recurringEventSchema)),
  showcase: s.optional(s.lazy(() => albumSchema)),
  type: type17Schema,
  video: s.optional(s.lazy(() => videoSchema)),
  _keysMap: {
    liveEvent: "live_event",
  },
});
