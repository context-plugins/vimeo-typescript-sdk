import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Filter21 = {
  Folder: "folder",
  LiveEvent: "live_event",
  Video: "video",
} as const;
export type Filter21 = (typeof Filter21)[keyof typeof Filter21] | (string & {});

export const filter21Schema: EnumSchema<Filter21> = s.enumOf<Filter21>(Filter21);
