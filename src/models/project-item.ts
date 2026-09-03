import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { albumSchema, type Album } from "./album.js";
import { metadata24Schema, type Metadata24 } from "./metadata24.js";
import { projectSchema, type Project } from "./project.js";
import { recurringEventSchema, type RecurringEvent } from "./recurring-event.js";
import { type21Schema, type Type21 } from "./type21.js";
import { videoSchema, type Video } from "./video.js";

export type ProjectItem = {
  folder?: Project;
  liveEvent?: RecurringEvent;
  metadata: Metadata24;
  sharedDate?: string;
  showcase?: Album;
  type: Type21;
  video?: Video;
};

export const projectItemSchema: Schema<ProjectItem> = s.object<ProjectItem>({
  folder: s.optional(s.lazy(() => projectSchema)),
  liveEvent: s.optional(s.lazy(() => recurringEventSchema)),
  metadata: metadata24Schema,
  sharedDate: s.optional(s.string()),
  showcase: s.optional(s.lazy(() => albumSchema)),
  type: type21Schema,
  video: s.optional(s.lazy(() => videoSchema)),
  _keysMap: {
    liveEvent: "live_event",
    sharedDate: "shared_date",
  },
});
