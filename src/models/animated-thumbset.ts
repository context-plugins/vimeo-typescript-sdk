import { s, type Schema } from "../core/index.js";
import { animatedThumbnailSchema, type AnimatedThumbnail } from "./animated-thumbnail.js";
import { status10Schema, type Status10 } from "./status10.js";

export type AnimatedThumbset = {
  clipUri: string;
  createdOn: string;
  sizes: AnimatedThumbnail[];
  status: Status10;
  uri: string;
};

export const animatedThumbsetSchema: Schema<AnimatedThumbset> = s.object<AnimatedThumbset>({
  clipUri: s.string(),
  createdOn: s.string(),
  sizes: s.array(s.lazy(() => animatedThumbnailSchema)),
  status: status10Schema,
  uri: s.string(),
  _keysMap: {
    clipUri: "clip_uri",
    createdOn: "created_on",
  },
});
