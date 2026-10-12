import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the requested video. */
export type RequestedClip = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const requestedClipSchema: Schema<RequestedClip> = s.object<RequestedClip>({
  options: s.array(s.string()),
  uri: s.string(),
});
