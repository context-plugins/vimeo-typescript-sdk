import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { albumSchema, type Album } from "./album.js";
import { metadata24Schema, type Metadata24 } from "./metadata24.js";
import { projectSchema, type Project } from "./project.js";
import { recurringEventSchema, type RecurringEvent } from "./recurring-event.js";
import { type21Schema, type Type21 } from "./type21.js";
import { videoSchema, type Video } from "./video.js";

export type ProjectItem = {
  /** The project item folder. */
  folder?: Project;
  /** The project item event. */
  liveEvent?: RecurringEvent;
  /** The item's metadata. */
  metadata: Metadata24;
  /** The time in ISO 8601 format when the item was shared. */
  sharedDate?: string;
  /** The project item showcase. */
  showcase?: Album;
  /**
   * The project item type.
   *
   * Option descriptions:
   *  * `folder` - The project item is a folder.
   *  * `live_event` - The project item is an event.
   *  * `showcase` - The project item is a showcase.
   *  * `video` - The project item is a video.
   */
  type: Type21;
  /** The project item video. */
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
