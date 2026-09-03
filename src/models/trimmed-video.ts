import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metadata28Schema, type Metadata28 } from "./metadata28.js";

export type TrimmedVideo = {
  clipId: number;
  createdOn: string;
  createdVersionId: string;
  end: string;
  isClipFinishedTranscoding: boolean;
  metadata: Metadata28;
  modifiedOn: string | null;
  rootVersionId: string;
  start: string;
  uri: string;
  versionQuality: string;
};

export const trimmedVideoSchema: Schema<TrimmedVideo> = s.object<TrimmedVideo>({
  clipId: s.number(),
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
