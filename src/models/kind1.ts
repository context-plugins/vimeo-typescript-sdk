import { s, type EnumSchema } from "../core/index.js";

export const Kind1 = {
  Captions: "captions",
  Subtitles: "subtitles",
} as const;
export type Kind1 = (typeof Kind1)[keyof typeof Kind1] | (string & {});

export const kind1Schema: EnumSchema<Kind1> = s.enumOf<Kind1>(Kind1);
