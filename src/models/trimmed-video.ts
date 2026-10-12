import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metadata28Schema, type Metadata28 } from "./metadata28.js";

export type TrimmedVideo = {
  /** The ID of the video. _This field is deprecated._ */
  clipId: number;
  /** The time in ISO 8601 format when the trim was created. */
  createdOn: string;
  /** The most recent version of the trimmed video. _This field is deprecated._ */
  createdVersionId: string;
  /** The end of the trim from the last trim, in seconds. */
  end: string;
  /** Whether the transcoding jobs for the video file have finished. _This field is deprecated._ */
  isClipFinishedTranscoding: boolean;
  metadata: Metadata28;
  /** The time in ISO 8601 format when the trim policy was last modified. */
  modifiedOn: string | null;
  /** The video version that is the source of the trimmed video. _This field is deprecated._ */
  rootVersionId: string;
  /** The start of the trim from the last trim, in seconds. */
  start: string;
  /** The URI of the player or the trim service. _This field is deprecated._ */
  uri: string;
  /** The quality of the root version video file. */
  versionQuality: string;
};

export const trimmedVideoSchema: Schema<TrimmedVideo> = s.object<TrimmedVideo>({
  clipId: s.float64(),
  createdOn: s.string(),
  createdVersionId: s.string(),
  end: s.string(),
  isClipFinishedTranscoding: s.boolean(),
  metadata: metadata28Schema,
  modifiedOn: s.nullable(s.string()),
  rootVersionId: s.string(),
  start: s.string(),
  uri: s.string(),
  versionQuality: s.string(),
  _keysMap: {
    clipId: "clip_id",
    createdOn: "created_on",
    createdVersionId: "created_version_id",
    isClipFinishedTranscoding: "is_clip_finished_transcoding",
    modifiedOn: "modified_on",
    rootVersionId: "root_version_id",
    versionQuality: "version_quality",
  },
});
