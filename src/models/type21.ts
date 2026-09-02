import { s, type EnumSchema } from "../core/index.js";

export const Type21 = {
  Folder: "folder",
  LiveEvent: "live_event",
  Showcase: "showcase",
  Video: "video",
} as const;
export type Type21 = (typeof Type21)[keyof typeof Type21] | (string & {});

export const type21Schema: EnumSchema<Type21> = s.enumOf<Type21>(Type21);
