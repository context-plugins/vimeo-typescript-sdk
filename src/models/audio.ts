import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
