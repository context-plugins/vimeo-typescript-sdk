import { s, type EnumSchema } from "../core/index.js";

export const Filter22 = {
  AppOnly: "app_only",
  ColdPrivacy: "cold_privacy",
  ColdStorage: "cold_storage",
  Embeddable: "embeddable",
  Featured: "featured",
  Live: "live",
  NoPlaceholder: "no_placeholder",
  Nolive: "nolive",
  Playable: "playable",
  ScreenRecorded: "screen_recorded",
} as const;
export type Filter22 = (typeof Filter22)[keyof typeof Filter22] | (string & {});

export const filter22Schema: EnumSchema<Filter22> = s.enumOf<Filter22>(Filter22);
