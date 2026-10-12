import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the video version that is the source of the trimmed video. */
export type RootVersion = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const rootVersionSchema: Schema<RootVersion> = s.object<RootVersion>({
  options: s.array(s.string()),
  uri: s.string(),
});
