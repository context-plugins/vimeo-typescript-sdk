import { s, type Schema } from "../core/index.js";

export type Card2 = {
  displayTime?: number;
  headline?: string;
  id?: string;
  imageUrl?: string;
  teaser?: string;
  timecode?: number;
  url?: string;
};

export const card2Schema: Schema<Card2> = s.object<Card2>({
  displayTime: s.optional(s.number()),
  headline: s.optional(s.string()),
  id: s.optional(s.string()),
  imageUrl: s.optional(s.string()),
  teaser: s.optional(s.string()),
  timecode: s.optional(s.number()),
  url: s.optional(s.string()),
  _keysMap: {
    displayTime: "display_time",
    imageUrl: "image_url",
  },
});
