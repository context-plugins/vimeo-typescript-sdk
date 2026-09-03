import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiAppSchema, type ApiApp } from "./api-app.js";
import { audioTrackQuotaSchema, type AudioTrackQuota } from "./audio-track-quota.js";
import { editSessionSchema, type EditSession } from "./edit-session.js";
import { metadata29Schema, type Metadata29 } from "./metadata29.js";
import { pictureSchema, type Picture } from "./picture.js";
import { playSchema, type Play } from "./play.js";
import { sourceMetadataSchema, type SourceMetadata } from "./source-metadata.js";
import { transcode2Schema, type Transcode2 } from "./transcode2.js";
import { upload1Schema, type Upload1 } from "./upload1.js";
import { userSchema, type User } from "./user.js";
import { versionTranscodeStatus1Schema, type VersionTranscodeStatus1 } from "./version-transcode-status1.js";
import { versionTypeSchema, type VersionType } from "./version-type.js";

export type VideoVersion = {
  active: boolean;
  app: ApiApp;
  audioTrackQuota: AudioTrackQuota;
  canRestoreCreate: boolean;
  createStoryboardId?: string;
  createdTime: string;
  description?: string;
  downloadConfig: Record<string, unknown>;
  duration: number | null;
  editSession: EditSession;
  filename: string;
  filesize: number | null;
  hasInteractive: boolean;
  height: number | null;
  isDeleted: boolean;
  isPlayable?: boolean;
  metadata: Metadata29;
  modifiedTime: string;
  originVariableFrameResolution?: boolean;
  pictures: Picture | null;
  play?: Play;
  playerEmbedUrl: string;
  sequenceNumber: number | null;
  sourceMetadata: SourceMetadata | null;
  transcode: Transcode2 | null;
  upload: Upload1 | null;
  uploadDate: string | null;
  uri: string;
  user: User | null;
  versionTranscodeStatus?: VersionTranscodeStatus1;
  versionType: VersionType;
  width: number | null;
};

export const videoVersionSchema: Schema<VideoVersion> = s.object<VideoVersion>({
  active: s.boolean(),
  app: apiAppSchema,
  audioTrackQuota: audioTrackQuotaSchema,
  canRestoreCreate: s.boolean(),
  createStoryboardId: s.optional(s.string()),
  createdTime: s.string(),
  description: s.optional(s.string()),
  downloadConfig: s.record(s.string(), s.unknown()),
  duration: s.nullable(s.number()),
  editSession: editSessionSchema,
  filename: s.string(),
  filesize: s.nullable(s.number()),
  hasInteractive: s.boolean(),
  height: s.nullable(s.number()),
  isDeleted: s.boolean(),
  isPlayable: s.optional(s.boolean()),
  metadata: metadata29Schema,
  modifiedTime: s.string(),
  originVariableFrameResolution: s.optional(s.boolean()),
  pictures: s.nullable(s.lazy(() => pictureSchema)),
  play: s.optional(s.lazy(() => playSchema)),
  playerEmbedUrl: s.string(),
  sequenceNumber: s.nullable(s.number()),
  sourceMetadata: s.nullable(s.lazy(() => sourceMetadataSchema)),
  transcode: s.nullable(s.lazy(() => transcode2Schema)),
  upload: s.nullable(s.lazy(() => upload1Schema)),
  uploadDate: s.nullable(s.string()),
  uri: s.string(),
  user: s.nullable(s.lazy(() => userSchema)),
  versionTranscodeStatus: s.optional(s.lazy(() => versionTranscodeStatus1Schema)),
  versionType: versionTypeSchema,
  width: s.nullable(s.number()),
  _keysMap: {
    audioTrackQuota: "audio_track_quota",
    canRestoreCreate: "can_restore_create",
    createStoryboardId: "create_storyboard_id",
    createdTime: "created_time",
    downloadConfig: "download_config",
    editSession: "edit_session",
    hasInteractive: "has_interactive",
    isDeleted: "is_deleted",
    isPlayable: "is_playable",
    modifiedTime: "modified_time",
    originVariableFrameResolution: "origin_variable_frame_resolution",
    playerEmbedUrl: "player_embed_url",
    sequenceNumber: "sequence_number",
    sourceMetadata: "source_metadata",
    uploadDate: "upload_date",
    versionTranscodeStatus: "version_transcode_status",
    versionType: "version_type",
  },
});
