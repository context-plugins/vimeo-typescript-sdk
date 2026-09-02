import { s, type Schema } from "../core/index.js";
import { apiAppSchema, type ApiApp } from "./api-app.js";
import { categorySchema, type Category } from "./category.js";
import { contentRatingClassSchema, type ContentRatingClass } from "./content-rating-class.js";
import { contentRating4Schema, type ContentRating4 } from "./content-rating4.js";
import { contextSchema, type Context } from "./context.js";
import { customMetadatumSchema, type CustomMetadatum } from "./custom-metadatum.js";
import { deletedBySchema, type DeletedBy } from "./deleted-by.js";
import { editingSessionSchema, type EditingSession } from "./editing-session.js";
import { embedSettingsSchema, type EmbedSettings } from "./embed-settings.js";
import { explicitAccessSummarySchema, type ExplicitAccessSummary } from "./explicit-access-summary.js";
import { license1Schema, type License1 } from "./license1.js";
import { metadata4Schema, type Metadata4 } from "./metadata4.js";
import { pictureSchema, type Picture } from "./picture.js";
import { playSchema, type Play } from "./play.js";
import { privacy3Schema, type Privacy3 } from "./privacy3.js";
import { projectSchema, type Project } from "./project.js";
import { reviewLinkSchema, type ReviewLink } from "./review-link.js";
import { reviewStatusSchema, type ReviewStatus } from "./review-status.js";
import { spatialSchema, type Spatial } from "./spatial.js";
import { statsSchema, type Stats } from "./stats.js";
import { status5Schema, type Status5 } from "./status5.js";
import { tagSchema, type Tag } from "./tag.js";
import { transcodeSchema, type Transcode } from "./transcode.js";
import { transcriptSchema, type Transcript } from "./transcript.js";
import { type7Schema, type Type7 } from "./type7.js";
import { uploadSchema, type Upload } from "./upload.js";
import { uploaderSchema, type Uploader } from "./uploader.js";
import { userSchema, type User } from "./user.js";
import { versionTranscodeStatusSchema, type VersionTranscodeStatus } from "./version-transcode-status.js";
import { videoFileSchema, type VideoFile } from "./video-file.js";
import { videoPageSettingsSchema, type VideoPageSettings } from "./video-page-settings.js";
import { videoVersionsSizeSchema, type VideoVersionsSize } from "./video-versions-size.js";
import { vodSchema, type Vod } from "./vod.js";

export type Video = {
  allowMultipleReviewLinks?: boolean;
  allowedPrivacies?: string[];
  app: ApiApp;
  canMoveToProject: boolean;
  categories: Category[];
  contentRating: ContentRating4;
  contentRatingClass: ContentRatingClass;
  context: Context;
  countsTowardManagedStorage: boolean;
  createdTime: string;
  customMetadata?: CustomMetadatum[];
  customUrl: string | null;
  deletedBy: DeletedBy | null;
  description: string | null;
  descriptionHtml: string;
  descriptionRich?: string;
  download?: VideoFile[];
  duration: number;
  editSession?: EditingSession;
  embed: EmbedSettings;
  explicitAccessSummary?: ExplicitAccessSummary;
  files?: VideoFile[];
  filesSize: VideoVersionsSize;
  hasAudio: boolean;
  hasAudioTracks: boolean;
  hasChapters: boolean;
  hasInteractive?: boolean;
  hasTextTracks: boolean;
  height: number;
  isColdPrivacyRestricted: boolean;
  isColdStorage: boolean;
  isCopyrightRestricted: boolean;
  isFree?: boolean;
  isPlayable: boolean;
  isStarredByCurUser: boolean;
  language: string | null;
  lastUserActionEventDate?: string | null;
  license: License1;
  link: string;
  manageLink?: string;
  metadata: Metadata4;
  modifiedTime: string;
  name: string;
  originVariableFrameResolution?: boolean;
  page?: VideoPageSettings;
  parentProject?: Project | null;
  password?: string;
  pictures: Picture;
  play?: Play;
  playerEmbedUrl: string;
  privacy: Privacy3;
  ratingModLocked: boolean;
  releaseTime: string;
  resourceKey: string;
  reviewLinks?: ReviewLink[];
  reviewStatus?: ReviewStatus;
  showReviewPage: boolean;
  showSvvFooterBanner: boolean;
  showSvvTimecodedComments: boolean;
  spatial?: Spatial;
  stats: Stats;
  status: Status5;
  tags: Tag[];
  transcode: Transcode | null;
  transcript: Transcript;
  type: Type7;
  upload: Upload | null;
  uploader: Uploader;
  uri: string;
  user: User;
  usesDrm: boolean;
  versionTranscodeStatus: VersionTranscodeStatus;
  vod: Vod;
  width: number;
};

export const videoSchema: Schema<Video> = s.object<Video>({
  allowMultipleReviewLinks: s.optional(s.boolean()),
  allowedPrivacies: s.optional(s.array(s.string())),
  app: apiAppSchema,
  canMoveToProject: s.boolean(),
  categories: s.array(s.lazy(() => categorySchema)),
  contentRating: contentRating4Schema,
  contentRatingClass: contentRatingClassSchema,
  context: contextSchema,
  countsTowardManagedStorage: s.boolean(),
  createdTime: s.string(),
  customMetadata: s.optional(s.array(s.lazy(() => customMetadatumSchema))),
  customUrl: s.nullable(s.string()),
  deletedBy: s.nullable(s.lazy(() => deletedBySchema)),
  description: s.nullable(s.string()),
  descriptionHtml: s.string(),
  descriptionRich: s.optional(s.string()),
  download: s.optional(s.array(s.lazy(() => videoFileSchema))),
  duration: s.number(),
  editSession: s.optional(s.lazy(() => editingSessionSchema)),
  embed: embedSettingsSchema,
  explicitAccessSummary: s.optional(s.lazy(() => explicitAccessSummarySchema)),
  files: s.optional(s.array(s.lazy(() => videoFileSchema))),
  filesSize: videoVersionsSizeSchema,
  hasAudio: s.boolean(),
  hasAudioTracks: s.boolean(),
  hasChapters: s.boolean(),
  hasInteractive: s.optional(s.boolean()),
  hasTextTracks: s.boolean(),
  height: s.number(),
  isColdPrivacyRestricted: s.boolean(),
  isColdStorage: s.boolean(),
  isCopyrightRestricted: s.boolean(),
  isFree: s.optional(s.boolean()),
  isPlayable: s.boolean(),
  isStarredByCurUser: s.boolean(),
  language: s.nullable(s.string()),
  lastUserActionEventDate: s.optionalNullable(s.string()),
  license: license1Schema,
  link: s.string(),
  manageLink: s.optional(s.string()),
  metadata: metadata4Schema,
  modifiedTime: s.string(),
  name: s.string(),
  originVariableFrameResolution: s.optional(s.boolean()),
  page: s.optional(s.lazy(() => videoPageSettingsSchema)),
  parentProject: s.optionalNullable(s.lazy(() => projectSchema)),
  password: s.optional(s.string()),
  pictures: pictureSchema,
  play: s.optional(s.lazy(() => playSchema)),
  playerEmbedUrl: s.string(),
  privacy: privacy3Schema,
  ratingModLocked: s.boolean(),
  releaseTime: s.string(),
  resourceKey: s.string(),
  reviewLinks: s.optional(s.array(s.lazy(() => reviewLinkSchema))),
  reviewStatus: s.optional(s.lazy(() => reviewStatusSchema)),
  showReviewPage: s.boolean(),
  showSvvFooterBanner: s.boolean(),
  showSvvTimecodedComments: s.boolean(),
  spatial: s.optional(s.lazy(() => spatialSchema)),
  stats: statsSchema,
  status: status5Schema,
  tags: s.array(s.lazy(() => tagSchema)),
  transcode: s.nullable(s.lazy(() => transcodeSchema)),
  transcript: transcriptSchema,
  type: type7Schema,
  upload: s.nullable(s.lazy(() => uploadSchema)),
  uploader: uploaderSchema,
  uri: s.string(),
  user: userSchema,
  usesDrm: s.boolean(),
  versionTranscodeStatus: versionTranscodeStatusSchema,
  vod: vodSchema,
  width: s.number(),
  _keysMap: {
    allowMultipleReviewLinks: "allow_multiple_review_links",
    allowedPrivacies: "allowed_privacies",
    canMoveToProject: "can_move_to_project",
    contentRating: "content_rating",
    contentRatingClass: "content_rating_class",
    countsTowardManagedStorage: "counts_toward_managed_storage",
    createdTime: "created_time",
    customMetadata: "custom_metadata",
    customUrl: "custom_url",
    deletedBy: "deleted_by",
    descriptionHtml: "description_html",
    descriptionRich: "description_rich",
    editSession: "edit_session",
    explicitAccessSummary: "explicit_access_summary",
    filesSize: "files_size",
    hasAudio: "has_audio",
    hasAudioTracks: "has_audio_tracks",
    hasChapters: "has_chapters",
    hasInteractive: "has_interactive",
    hasTextTracks: "has_text_tracks",
    isColdPrivacyRestricted: "is_cold_privacy_restricted",
    isColdStorage: "is_cold_storage",
    isCopyrightRestricted: "is_copyright_restricted",
    isFree: "is_free",
    isPlayable: "is_playable",
    isStarredByCurUser: "is_starred_by_cur_user",
    lastUserActionEventDate: "last_user_action_event_date",
    manageLink: "manage_link",
    modifiedTime: "modified_time",
    originVariableFrameResolution: "origin_variable_frame_resolution",
    parentProject: "parent_project",
    playerEmbedUrl: "player_embed_url",
    ratingModLocked: "rating_mod_locked",
    releaseTime: "release_time",
    resourceKey: "resource_key",
    reviewLinks: "review_links",
    reviewStatus: "review_status",
    showReviewPage: "show_review_page",
    showSvvFooterBanner: "show_svv_footer_banner",
    showSvvTimecodedComments: "show_svv_timecoded_comments",
    usesDrm: "uses_drm",
    versionTranscodeStatus: "version_transcode_status",
  },
});
