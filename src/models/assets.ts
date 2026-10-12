import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { userSchema, type User } from "./user.js";
import { videoSchema, type Video } from "./video.js";

/** The assets that are needed to decorate the text. */
export type Assets = {
  /** The user object associated with the note's text decoration. */
  user?: User;
  /** The video object associated with the note's text decoration. */
  video?: Video;
};

export const assetsSchema: Schema<Assets> = s.object<Assets>({
  user: s.optional(s.lazy(() => userSchema)),
  video: s.optional(s.lazy(() => videoSchema)),
});
