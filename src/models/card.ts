import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Card = {
  displayTime: number;
  headline: string;
  id: string;
  imageUrl: string;
  teaser: string;
  timecode: number;
  url: string;
};

export const cardSchema: Schema<Card> = s.object<Card>({
  displayTime: s.number(),
  headline: s.string(),
  id: s.string(),
  imageUrl: s.string(),
  teaser: s.string(),
  timecode: s.number(),
  url: s.string(),
  _keysMap: {
    displayTime: "display_time",
    imageUrl: "image_url",
  },
});
