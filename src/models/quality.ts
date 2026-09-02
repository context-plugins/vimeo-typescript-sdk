import { s, type EnumSchema } from "../core/index.js";

export const Quality = {
  Audio: "audio",
  Hd: "hd",
  Hls: "hls",
  Mobile: "mobile",
  Sd: "sd",
  Source: "source",
  Uhd: "uhd",
} as const;
export type Quality = (typeof Quality)[keyof typeof Quality] | (string & {});

export const qualitySchema: EnumSchema<Quality> = s.enumOf<Quality>(Quality);
