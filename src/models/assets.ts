import { s, type Schema } from "../core/index.js";
import { userSchema, type User } from "./user.js";
import { videoSchema, type Video } from "./video.js";

export type Assets = {
  user?: User;
  video?: Video;
};

export const assetsSchema: Schema<Assets> = s.object<Assets>({
  user: s.optional(s.lazy(() => userSchema)),
  video: s.optional(s.lazy(() => videoSchema)),
});
