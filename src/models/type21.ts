import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The project item type.
 *
 * Option descriptions:
 *  * `folder` - The project item is a folder.
 *  * `live_event` - The project item is an event.
 *  * `showcase` - The project item is a showcase.
 *  * `video` - The project item is a video.
 */
export const Type21 = {
  Folder: "folder",
  LiveEvent: "live_event",
  Showcase: "showcase",
  Video: "video",
} as const;
export type Type21 = (typeof Type21)[keyof typeof Type21] | (string & {});

export const type21Schema: EnumSchema<Type21> = s.enumOf<Type21>(Type21);
