import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { userSchema, type User } from "./user.js";
import { videoSchema, type Video } from "./video.js";

export type UploadAttempt = {
  /** The video to upload. */
  clip?: Video;
  /** The HTML upload form. */
  form?: string;
  /** The ticket identifier string for the upload. */
  ticketId: string;
  /** The upload URL. */
  uploadLink: string;
  /** The upload URI. */
  uri: string;
  /** The owner of the uploaded video. */
  user: User;
};

export const uploadAttemptSchema: Schema<UploadAttempt> = s.object<UploadAttempt>({
  clip: s.optional(s.lazy(() => videoSchema)),
  form: s.optional(s.string()),
  ticketId: s.string(),
  uploadLink: s.string(),
  uri: s.string(),
  user: userSchema,
  _keysMap: {
    ticketId: "ticket_id",
    uploadLink: "upload_link",
  },
});
