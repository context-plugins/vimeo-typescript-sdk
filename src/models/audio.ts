import { s, type Schema } from "../core/index.js";

export type Audio = {
  channels: number;
  codec: string;
  displayCodec: string;
};

export const audioSchema: Schema<Audio> = s.object<Audio>({
  channels: s.number(),
  codec: s.string(),
  displayCodec: s.string(),
  _keysMap: {
    displayCodec: "display_codec",
  },
});
