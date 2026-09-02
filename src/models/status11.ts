import { s, type EnumSchema } from "../core/index.js";

export const Status11 = {
  Streaming: "streaming",
} as const;
export type Status11 = (typeof Status11)[keyof typeof Status11] | (string & {});

export const status11Schema: EnumSchema<Status11> = s.enumOf<Status11>(Status11);
