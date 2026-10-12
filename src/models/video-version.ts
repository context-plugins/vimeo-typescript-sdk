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
  /** Whether the video version is currently active. */
  active: boolean;
  /** The API app associated with the video version. */
  app: ApiApp;
  /** The quota parameters for the audio tracks available for this version. */
  audioTrackQuota: AudioTrackQuota;
  /** Whether the version can be restored. */
  canRestoreCreate: boolean;
  /** The storyboard ID of the video version. */
  createStoryboardId?: string;
  /** The time in ISO 8601 format when the video version was created. */
  createdTime: string;
  /**
   * A description of the video version. This description can make use of the full unicode character
   * set. This field appears in the response only when a corresponding value is present.
   */
  description?: string;
  /** The download configuration associated with the version. */
  downloadConfig: Record<string, unknown>;
  /** The duration in seconds of the video version. */
  duration: number | null;
  /**
   * Information about the video's Vimeo Create editing session. This data requires a bearer token
   * with the `private` scope.
   */
  editSession: EditSession;
  /** The file name of the video version. */
  filename: string;
  /** The size in byes of the video version file. */
  filesize: number | null;
  /** Whether the video has interactive capability. */
  hasInteractive: boolean;
  /** The height of the version's video. */
  height: number | null;
  /** Whether the video version has been deleted. */
  isDeleted: boolean;
  /** Whether the video version is playable. */
  isPlayable?: boolean;
  /** The video version's metadata. */
  metadata: Metadata29;
  /** The time in ISO 8601 format when the video version was last modified. */
  modifiedTime: string;
  /**
   * Whether the video has unified resolution. If the value of this field is `false`, the video
   * requires transcoding.
   */
  originVariableFrameResolution?: boolean;
  /** The thumbnail for the video version. */
  pictures: Picture | null;
  /** The `Play` representation. */
  play?: Play;
  /**
   * The embed URL for the video's player. This data requires a bearer token with the `private`
   * scope.
   */
  playerEmbedUrl: string;
  /** The sequence number of the video version. */
  sequenceNumber: number | null;
  /** Metadata about the source file. */
  sourceMetadata: SourceMetadata | null;
  /** The version's transcode information. */
  transcode: Transcode2 | null;
  /** The version's upload information. */
  upload: Upload1 | null;
  /** The time in ISO 8601 format when the video version was uploaded. */
  uploadDate: string | null;
  /** The version's canonical relative URI. */
  uri: string;
  /** The owner of the video version. */
  user: User | null;
  /**
   * The transcode status code of the video version.
   *
   * Option descriptions:
   *  * `complete` - Transcoding is complete. The video version is available.
   *  * `error` - There was a transcoding error. The video version isn't available.
   *  * `in_progress` - Transcoding is in progress. The video version isn't available yet.
   */
  versionTranscodeStatus?: VersionTranscodeStatus1;
  /**
   * The type of the version.
   *
   * Option descriptions:
   *  * `regular` - The version was generated through a file upload.
   *  * `screen-recording` - The version was generated through Vimeo Record.
   *  * `vimeo-create` - The version was generated through Vimeo Create.
   */
  versionType: VersionType;
  /** The width of the version's video. */
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
  duration: s.nullable(s.float64()),
  editSession: editSessionSchema,
  filename: s.string(),
  filesize: s.nullable(s.float64()),
  hasInteractive: s.boolean(),
  height: s.nullable(s.float64()),
  isDeleted: s.boolean(),
  isPlayable: s.optional(s.boolean()),
  metadata: metadata29Schema,
  modifiedTime: s.string(),
  originVariableFrameResolution: s.optional(s.boolean()),
  pictures: s.nullable(s.lazy(() => pictureSchema)),
  play: s.optional(s.lazy(() => playSchema)),
  playerEmbedUrl: s.string(),
  sequenceNumber: s.nullable(s.float64()),
  sourceMetadata: s.nullable(s.lazy(() => sourceMetadataSchema)),
  transcode: s.nullable(s.lazy(() => transcode2Schema)),
  upload: s.nullable(s.lazy(() => upload1Schema)),
  uploadDate: s.nullable(s.string()),
  uri: s.string(),
  user: s.nullable(s.lazy(() => userSchema)),
  versionTranscodeStatus: s.optional(s.lazy(() => versionTranscodeStatus1Schema)),
  versionType: versionTypeSchema,
  width: s.nullable(s.float64()),
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
