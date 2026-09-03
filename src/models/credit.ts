import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { userSchema, type User } from "./user.js";
import { videoSchema, type Video } from "./video.js";

export type Credit = {
  name: string;
  role: string;
  uri: string;
  user?: User;
  video?: Video;
};

export const creditSchema: Schema<Credit> = s.object<Credit>({
  name: s.string(),
  role: s.string(),
  uri: s.string(),
  user: s.optional(s.lazy(() => userSchema)),
  video: s.optional(s.lazy(() => videoSchema)),
});
