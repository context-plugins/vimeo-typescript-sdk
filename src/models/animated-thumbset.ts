import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { animatedThumbnailSchema, type AnimatedThumbnail } from "./animated-thumbnail.js";
import { status9Schema, type Status9 } from "./status9.js";

export type AnimatedThumbset = {
  clipUri: string;
  createdOn: string;
  sizes: AnimatedThumbnail[];
  status: Status9;
  uri: string;
};

export const animatedThumbsetSchema: Schema<AnimatedThumbset> = s.object<AnimatedThumbset>({
  clipUri: s.string(),
  createdOn: s.string(),
  sizes: s.array(s.lazy(() => animatedThumbnailSchema)),
  status: status9Schema,
  uri: s.string(),
  _keysMap: {
    clipUri: "clip_uri",
    createdOn: "created_on",
  },
});
