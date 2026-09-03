import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pictureSchema, type Picture } from "./picture.js";

export type Recording = {
  duration: number | null;
  link: string;
  pictures: Picture;
  streamedOn: string | null;
  title: string | null;
  uri: string;
};

export const recordingSchema: Schema<Recording> = s.object<Recording>({
  duration: s.nullable(s.number()),
  link: s.string(),
  pictures: pictureSchema,
  streamedOn: s.nullable(s.string()),
  title: s.nullable(s.string()),
  uri: s.string(),
  _keysMap: {
    streamedOn: "streamed_on",
  },
});
