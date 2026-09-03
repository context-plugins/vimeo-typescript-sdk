import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { userSchema, type User } from "./user.js";
import { videoSchema, type Video } from "./video.js";

export type UploadAttempt = {
  clip?: Video;
  form?: string;
  ticketId: string;
  uploadLink: string;
  uri: string;
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
