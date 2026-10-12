import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { userSchema, type User } from "./user.js";
import { videoSchema, type Video } from "./video.js";

export type Credit = {
  /** The name of the person credited. */
  name: string;
  /** The character that the person portrayed, or the job that the person performed. */
  role: string;
  /** The unique identifier to access the credit resource. */
  uri: string;
  /** The Vimeo user associated with the credit. */
  user?: User;
  /** The video associated with the credit. */
  video?: Video;
};

export const creditSchema: Schema<Credit> = s.object<Credit>({
  name: s.string(),
  role: s.string(),
  uri: s.string(),
  user: s.optional(s.lazy(() => userSchema)),
  video: s.optional(s.lazy(() => videoSchema)),
});
