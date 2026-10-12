import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pictureSchema, type Picture } from "./picture.js";

export type Recording = {
  /** The duration of the recording, in seconds. */
  duration: number | null;
  /** The URL to watch the recording. */
  link: string;
  /** The recording's thumbnail. */
  pictures: Picture;
  /** When the recording was streamed. */
  streamedOn: string | null;
  /**
   * The title of the recording. Falls back to the event title when the clip has no explicit name.
   */
  title: string | null;
  /** The canonical URI of the recording. */
  uri: string;
};

export const recordingSchema: Schema<Recording> = s.object<Recording>({
  duration: s.nullable(s.float64()),
  link: s.string(),
  pictures: pictureSchema,
  streamedOn: s.nullable(s.string()),
  title: s.nullable(s.string()),
  uri: s.string(),
  _keysMap: {
    streamedOn: "streamed_on",
  },
});
