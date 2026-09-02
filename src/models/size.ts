import { s, type Schema } from "../core/index.js";

export type Size = {
  height: number;
  link: string;
  linkWithPlayButton?: string;
  width: number;
};

export const sizeSchema: Schema<Size> = s.object<Size>({
  height: s.number(),
  link: s.string(),
  linkWithPlayButton: s.optional(s.string()),
  width: s.number(),
  _keysMap: {
    linkWithPlayButton: "link_with_play_button",
  },
});
