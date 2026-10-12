import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metadata18Schema, type Metadata18 } from "./metadata18.js";

export type Fragments = {
  /** The time in ISO 8601 format when the fragment was created. */
  createdOn: string;
  /** Metadata about the fragments. */
  metadata: Metadata18;
  /** The time in ISO 8601 format when the fragment was last updated. */
  modifiedOn: string;
  /**
   * The time in milliseconds of the fragment's _inpoint_, or the time from the start of the video
   * that marks the beginning of the fragment.
   */
  timecode: number;
  /** The URI of the video fragment. */
  uri: string;
};

export const fragmentsSchema: Schema<Fragments> = s.object<Fragments>({
  createdOn: s.string(),
  metadata: metadata18Schema,
  modifiedOn: s.string(),
  timecode: s.float64(),
  uri: s.string(),
  _keysMap: {
    createdOn: "created_on",
    modifiedOn: "modified_on",
  },
});
