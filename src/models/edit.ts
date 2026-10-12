import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about where and how to edit a video. */
export type Edit = {
  /** An array of video fields that a user can't interact with. */
  blockedFields: string[];
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const editSchema: Schema<Edit> = s.object<Edit>({
  blockedFields: s.array(s.string()),
  options: s.array(s.string()),
  uri: s.string(),
  _keysMap: {
    blockedFields: "blocked_fields",
  },
});
