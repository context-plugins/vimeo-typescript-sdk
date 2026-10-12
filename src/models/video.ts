import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
  /** Whether the video can have multiple review links. */
  allowMultipleReviewLinks?: boolean;
  /** An array of privacy settings supported for this video and the requesting user. */
  allowedPrivacies?: string[];
  /** The API application associated with the video owner's token. */
  app: ApiApp;
  /**
   * Whether the video can be moved to a folder. This data requires a bearer token with the
   * `private` scope.
   */
  canMoveToProject: boolean;
  /** The categories that the video belongs to. */
  categories: Category[];
  /**
   * The video's granular content rating.
   *
   * Option descriptions:
   *  * `advertisement` - The video contains advertisements.
   *  * `drugs` - The video contains drug or alcohol use.
   *  * `language` - The video contains profanity or sexually suggestive content.
   *  * `nudity` - The video contains nudity.
   *  * `safe` - The video is safe for all audiences.
   *  * `unrated` - The video hasn't been rated.
   *  * `violence` - The video contains violence.
   */
  contentRating: ContentRating4;
  /**
   * The video's high-level content rating class.
   *
   * Option descriptions:
   *  * `explicit` - The video contains one or more explicit content rating types.
   *  * `safe` - The video contains no explicit content rating types.
   *  * `unrated` - The video doesn't belong to a content rating class.
   */
  contentRatingClass: ContentRatingClass;
  /** The context of the video's subscription, if the video is part of a subscription. */
  context: Context;
  /**
   * Whether this video counts toward the owner's managed (restricted) storage limit — i.e. it is
   * non-public OR embeddable. Only rendered for owners that actually have a managed storage cap
   * (repackaged / REPACK_FREE plans); omitted otherwise, since the two-pool model does not apply.
   * Clients use this to mark managed-storage videos and to offer the "make it public &
   * non-embeddable to free managed storage / unfreeze" affordance.
   */
  countsTowardManagedStorage: boolean;
  /** The time in ISO 8601 format when the video was created. */
  createdTime: string;
  /** The video's custom metadata fields with their settings and current values. */
  customMetadata?: CustomMetadatum[];
  /** The custom URL of the video. */
  customUrl: string | null;
  /** The user who deleted this video. Null if the video was moved to cold storage automatically. */
  deletedBy: DeletedBy | null;
  /** A brief explanation of the video's content. */
  description: string | null;
  /** A brief explanation of the video's content, formatted with HTML entities. */
  descriptionHtml: string;
  /** A JSON representation of the description. */
  descriptionRich?: string;
  /**
   * The list of downloadable files for the video. This data requires a bearer token with the
   * `private` scope.
   */
  download?: VideoFile[];
  /**
   * The video's duration in seconds. A value of `0` indicates the duration hasn't been calculated
   * yet.
   */
  duration: number;
  /**
   * Information about the video's Vimeo Create editing session. This data requires a bearer token
   * with the `private` scope.
   */
  editSession?: EditingSession;
  /** Information about embedding the video. */
  embed: EmbedSettings;
  /**
   * The explicit access summary of the video. This data requires a bearer token with the `private`
   * scope.
   */
  explicitAccessSummary?: ExplicitAccessSummary;
  /**
   * The list of files for the video. This data requires a bearer token with the `private` scope.
   */
  files?: VideoFile[];
  /** The total combined file size for all versions of the video, and the file size type. */
  filesSize: VideoVersionsSize;
  /** Whether the video has audio. */
  hasAudio: boolean;
  /** Whether the video has alternate audio tracks. */
  hasAudioTracks: boolean;
  /** Whether the video has chapters. */
  hasChapters: boolean;
  /** Whether the video has interactive capability. */
  hasInteractive?: boolean;
  /** Whether the video has text tracks. */
  hasTextTracks: boolean;
  /** The video's height in pixels. */
  height: number;
  /**
   * Whether the video's privacy is being suppressed to private because the owner's current plan no
   * longer supports its original privacy setting (for example, a previously unlisted video on a
   * downgraded/free account). The video's stored privacy is preserved as the owner's intent and
   * served back automatically if the owner upgrades again. Distinct from `is_cold_storage`, which
   * covers videos frozen for exceeding the plan's storage limit.
   */
  isColdPrivacyRestricted: boolean;
  /** Whether the video has been moved to cold storage. */
  isColdStorage: boolean;
  /**
   * Whether the video is privacy restricted due to a copyright infringement. This data requires a
   * bearer token with the `private` scope.
   */
  isCopyrightRestricted: boolean;
  /** Whether the video is a free Vimeo Stock video. */
  isFree?: boolean;
  /** Whether the video is playable. */
  isPlayable: boolean;
  /** Whether the current user has starred this video. */
  isStarredByCurUser: boolean;
  /** The video's primary language. */
  language: string | null;
  /** The time in ISO 8601 format when the user last modified the video. */
  lastUserActionEventDate?: string | null;
  /**
   * The [Creative Commons](http://creativecommons.org/licenses/) license that the video is given
   * under.
   *
   * Option descriptions:
   *  * `` - No Creative Commons license has been set for the video.
   *  * `by` - The video is given under the Attribution license.
   *  * `by-nc` - The video is given under the Attribution Non-Commercial license.
   *  * `by-nc-nd` - The video is given under the Attribution Non-Commercial No Derivatives license.
   *  * `by-nc-sa` - The video is given under the Attribution Non-Commercial Share Alike license.
   *  * `by-nd` - The video is given under the Attribution No Derivatives license.
   *  * `by-sa` - The video is given under the Attribution Share Alike license.
   *  * `cc0` - The video is given under the Public Domain Dedication license.
   */
  license: License1;
  /** The link to the video. */
  link: string;
  /**
   * The link to the video management page. This data requires a bearer token with the `private`
   * scope.
   */
  manageLink?: string;
  /** The video's metadata. */
  metadata: Metadata4;
  /** The time in ISO 8601 format when the video metadata was last modified. */
  modifiedTime: string;
  /** The video's title. */
  name: string;
  /**
   * Whether the video has unified resolution. If the value of this field is `false`, the video
   * requires transcoding.
   */
  originVariableFrameResolution?: boolean;
  /**
   * Information about the video's page settings. This data requires a bearer token with the
   * `private` scope.
   */
  page?: VideoPageSettings;
  /** Information about the project that contains the video. */
  parentProject?: Project | null;
  /**
   * The privacy-enabled password to watch the video. Only the video's owner and team members with
   * permission can access the video's password. This data requires a bearer token with the
   * `private` scope.
   */
  password?: string;
  /** The video's active picture. */
  pictures: Picture;
  /** The `Play` representation. */
  play?: Play;
  /** The video's player embed URL. */
  playerEmbedUrl: string;
  /** The video's privacy setting. */
  privacy: Privacy3;
  /** Whether the video's content rating is locked by a moderator. */
  ratingModLocked: boolean;
  /** The time in ISO 8601 format when the video was released. */
  releaseTime: string;
  /** The resource key string of the video. */
  resourceKey: string;
  /** All active review links associated with the video. */
  reviewLinks?: ReviewLink[];
  /**
   * The review status of the video.
   *
   * Option descriptions:
   *  * `approved` - The video review was approved.
   *  * `in_progress` - The video review is in progress.
   *  * `needs_review` - The video needs to be reviewed.
   */
  reviewStatus?: ReviewStatus;
  /**
   * Whether to show the button for reviews on single video view recipient pages. This data requires
   * a bearer token with the `private` scope.
   */
  showReviewPage: boolean;
  /**
   * Whether to show the single video view footer banner on recipient pages. This data requires a
   * bearer token with the `private` scope.
   */
  showSvvFooterBanner: boolean;
  /**
   * Whether to enable timecoded comments on the single video view recipient page. This data
   * requires a bearer token with the `private` scope.
   */
  showSvvTimecodedComments: boolean;
  /** The video's 360 spatial data. */
  spatial?: Spatial;
  /** A collection of analytics associated with the video. */
  stats: Stats;
  /**
   * The status code for the availability of the video.
   *
   * Option descriptions:
   *  * `available` - The video is available.
   *  * `failed` - There was an error in rendering the video.
   *  * `processing` - Rendering has started and is currently underway for the video.
   *  * `quota_exceeded` - The user's weekly upload quota is exceeded with this video.
   *  * `total_cap_exceeded` - The user's total storage limit is exceeded with this video.
   *  * `transcode_starting` - Transcoding is starting for the video.
   *  * `transcoding` - Transcoding has started and is currently underway for the video.
   *  * `transcoding_error` - There was an error in transcoding the video.
   *  * `unavailable` - The video is unavailable.
   *  * `uploading` - The video is being uploaded.
   *  * `uploading_error` - There was an error in uploading the video.
   */
  status: Status5;
  /** An array of all tags assigned to the video. */
  tags: Tag[];
  /** The transcode information of the video upload. */
  transcode: Transcode | null;
  /**
   * The transcript information of the video. This data requires a bearer token with the `private`
   * scope.
   */
  transcript: Transcript;
  /**
   * The type of the video.
   *
   * Option descriptions:
   *  * `live` - The video is or was an event.
   *  * `stock` - The video is a Vimeo Stock video.
   *  * `video` - The video is a standard Vimeo video.
   */
  type: Type7;
  /** The video's upload information. */
  upload: Upload | null;
  /** The video's uploader. */
  uploader: Uploader;
  /** The video's canonical relative URI. */
  uri: string;
  /** The video's owner. */
  user: User;
  /** Whether the video uses digital rights management. */
  usesDrm: boolean;
  /** Detailed transcode status information for the current version of the video upload. */
  versionTranscodeStatus: VersionTranscodeStatus;
  /** The video's Vimeo On Demand information. */
  vod: Vod;
  /** The video's width in pixels. */
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
  duration: s.float64(),
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
  height: s.float64(),
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
  width: s.float64(),
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
