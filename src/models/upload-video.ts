import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The user's upload permissions information for this project. */
export type UploadVideo = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const uploadVideoSchema: Schema<UploadVideo> = s.object<UploadVideo>({
  options: s.array(s.string()),
  uri: s.string(),
});
