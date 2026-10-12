import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Audio metadata information. */
export type Audio = {
  /** The number of audio channels in the source file. */
  channels: number;
  /** The raw audio codec of the source file. */
  codec: string;
  /**
   * A human-readable version of the audio codec name, such as `AAC`, `MP3`, or `Opus`, or the raw
   * codec value, depending on the codec.
   */
  displayCodec: string;
};

export const audioSchema: Schema<Audio> = s.object<Audio>({
  channels: s.float64(),
  codec: s.string(),
  displayCodec: s.string(),
  _keysMap: {
    displayCodec: "display_codec",
  },
});
