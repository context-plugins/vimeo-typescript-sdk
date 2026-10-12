import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the block status of the authenticated user. */
export type Block1 = {
  /** Whether the authenticated user is blocking the requested user. */
  added: boolean;
  /** The time in ISO 8601 format when the block occurred, or the null value if no block exists. */
  addedTime?: string;
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The URI to block or unblock the requested user. */
  uri: string;
};

export const block1Schema: Schema<Block1> = s.object<Block1>({
  added: s.boolean(),
  addedTime: s.optional(s.string()),
  options: s.array(s.string()),
  uri: s.string(),
  _keysMap: {
    addedTime: "added_time",
  },
});
