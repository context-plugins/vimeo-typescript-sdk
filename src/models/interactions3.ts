import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { album4Schema, type Album4 } from "./album4.js";
import { askAiManagerSchema, type AskAiManager } from "./ask-ai-manager.js";
import { askAiViewerSchema, type AskAiViewer } from "./ask-ai-viewer.js";
import { askAiSchema, type AskAi } from "./ask-ai.js";
import { buySchema, type Buy } from "./buy.js";
import {
  canRequestTeamRoleUpgradeSchema,
  type CanRequestTeamRoleUpgrade,
} from "./can-request-team-role-upgrade.js";
import {
  canUpdatePrivacyToPublicSchema,
  type CanUpdatePrivacyToPublic,
} from "./can-update-privacy-to-public.js";
import { channel1Schema, type Channel1 } from "./channel1.js";
import { createEditorSchema, type CreateEditor } from "./create-editor.js";
import { deleteSchema, type Delete } from "./delete.js";
import { editPrivacySchema, type EditPrivacy } from "./edit-privacy.js";
import { editSchema, type Edit } from "./edit.js";
import {
  hasRestrictedPrivacyOptionsSchema,
  type HasRestrictedPrivacyOptions,
} from "./has-restricted-privacy-options.js";
import { highlightsSchema, type Highlights } from "./highlights.js";
import { inviteSchema, type Invite } from "./invite.js";
import { legalHoldSchema, type LegalHold } from "./legal-hold.js";
import { likeSchema, type Like } from "./like.js";
import { rentSchema, type Rent } from "./rent.js";
import { report1Schema, type Report1 } from "./report1.js";
import { setContentRatingSchema, type SetContentRating } from "./set-content-rating.js";
import { subscribeSchema, type Subscribe } from "./subscribe.js";
import { summarySchema, type Summary } from "./summary.js";
import { textTranslationsSchema, type TextTranslations } from "./text-translations.js";
import { transcriptVideoEditorSchema, type TranscriptVideoEditor } from "./transcript-video-editor.js";
import { translationsSchema, type Translations } from "./translations.js";
import { trimSchema, type Trim } from "./trim.js";
import { validateSchema, type Validate } from "./validate.js";
import { viewPrivacySchema, type ViewPrivacy } from "./view-privacy.js";
import { viewTeamMembersSchema, type ViewTeamMembers } from "./view-team-members.js";
import { watchedSchema, type Watched } from "./watched.js";
import { watchlater1Schema, type Watchlater1 } from "./watchlater1.js";

/** A list of resource URIs related to the video. */
export type Interactions3 = {
  /**
   * Information about adding or removing a video from the showcase. This information is included
   * only when the video is referenced by the URI of a showcase that's moderated by the user.
   */
  album: Album4 | null;
  /** Information about where and how to submit questions to the AI service for this video. */
  askAi: AskAi;
  /**
   * Information about where and how to submit questions by managers to the AI service for this
   * video.
   */
  askAiManager: AskAiManager;
  /**
   * Information about where and how to submit questions by viewers to the AI service for this
   * video.
   */
  askAiViewer: AskAiViewer;
  /** The Buy interaction for the On Demand video. */
  buy: Buy | null;
  /** Whether the current user can comment on the video on the video management page. */
  canComment?: boolean;
  /** Whether the current user can add reactions to collaborator comments. */
  canReactToCollabComments: boolean;
  /** Information about whether the user can request a team upgrade from the Viewer role. */
  canRequestTeamRoleUpgrade: CanRequestTeamRoleUpgrade;
  /** Whether a user can update the video privacy to public. */
  canUpdatePrivacyToPublic: CanUpdatePrivacyToPublic;
  /**
   * Information about removing a video from the channel. This information is included only when the
   * video is referenced by the URI of a channel that's moderated by the user.
   */
  channel: Channel1;
  /** Information about where and how to edit a video using the Vimeo Create editor. */
  createEditor: CreateEditor;
  /** Information about where and how to delete a video. */
  delete: Delete;
  /** Information about where and how to edit a video. */
  edit: Edit;
  /** Information about editing the privacy of the video. */
  editPrivacy: EditPrivacy;
  /** Whether the current user can report the video. */
  flagClip?: boolean;
  /** Information about whether the video has restricted privacy options. */
  hasRestrictedPrivacyOptions: HasRestrictedPrivacyOptions;
  /** Information about where and how to create a highlight for the video. */
  highlights: Highlights;
  /** Whether the user can interact with the video. */
  interact?: boolean;
  /**
   * Information about where and how to get a list of team members or groups who were explicitly
   * invited to a video, and where and how to invite a team member to a video.
   */
  invite: Invite;
  /** The associated legal hold object. */
  legalHold: LegalHold;
  /** Information about whether the user has liked this video. */
  like: Like;
  /** Information about whether the video owner has LMS export enabled. */
  lmsExport?: Record<string, unknown>;
  /** The Rent interaction for the On Demand video. */
  rent: Rent | null;
  /** Information about where and how to report a video. */
  report: Report1;
  /** Information about setting a content rating for the video. */
  setContentRating: SetContentRating;
  /** Subscription information for an On Demand video. */
  subscribe?: Subscribe | null;
  /** Information about whether the current user can create or get a summary for the video. */
  summary: Summary;
  /** Information about where and how to create a text translation for the video. */
  textTranslations: TextTranslations;
  /**
   * Information about where and how to edit a video using the Transcription-based Video Editor
   * editor.
   */
  transcriptVideoEditor: TranscriptVideoEditor;
  /** Information about where and how to create a translation for the video. */
  translations: Translations;
  /** Information about where and how to trim the video. */
  trim: Trim;
  /** Information about where and how to validate a video field. */
  validate: Validate;
  /** Information about whether a user has permissions to view the privacy of the video. */
  viewPrivacy: ViewPrivacy;
  /** Information about whether a user can view the team members associated with a video. */
  viewTeamMembers: ViewTeamMembers;
  /** Information about removing this video from the user's list of watched videos. */
  watched: Watched;
  /** Information about whether this video appears on the user's Watch Later list. */
  watchlater: Watchlater1;
};

export const interactions3Schema: Schema<Interactions3> = s.object<Interactions3>({
  album: s.nullable(s.lazy(() => album4Schema)),
  askAi: askAiSchema,
  askAiManager: askAiManagerSchema,
  askAiViewer: askAiViewerSchema,
  buy: s.nullable(s.lazy(() => buySchema)),
  canComment: s.optional(s.boolean()),
  canReactToCollabComments: s.boolean(),
  canRequestTeamRoleUpgrade: canRequestTeamRoleUpgradeSchema,
  canUpdatePrivacyToPublic: canUpdatePrivacyToPublicSchema,
  channel: channel1Schema,
  createEditor: createEditorSchema,
  delete: deleteSchema,
  edit: editSchema,
  editPrivacy: editPrivacySchema,
  flagClip: s.optional(s.boolean()),
  hasRestrictedPrivacyOptions: hasRestrictedPrivacyOptionsSchema,
  highlights: highlightsSchema,
  interact: s.optional(s.boolean()),
  invite: inviteSchema,
  legalHold: legalHoldSchema,
  like: likeSchema,
  lmsExport: s.optional(s.record(s.string(), s.unknown())),
  rent: s.nullable(s.lazy(() => rentSchema)),
  report: report1Schema,
  setContentRating: setContentRatingSchema,
  subscribe: s.optionalNullable(s.lazy(() => subscribeSchema)),
  summary: summarySchema,
  textTranslations: textTranslationsSchema,
  transcriptVideoEditor: transcriptVideoEditorSchema,
  translations: translationsSchema,
  trim: trimSchema,
  validate: validateSchema,
  viewPrivacy: viewPrivacySchema,
  viewTeamMembers: viewTeamMembersSchema,
  watched: watchedSchema,
  watchlater: watchlater1Schema,
  _keysMap: {
    askAi: "ask_ai",
    askAiManager: "ask_ai_manager",
    askAiViewer: "ask_ai_viewer",
    canComment: "can_comment",
    canReactToCollabComments: "can_react_to_collab_comments",
    canRequestTeamRoleUpgrade: "can_request_team_role_upgrade",
    canUpdatePrivacyToPublic: "can_update_privacy_to_public",
    createEditor: "create_editor",
    editPrivacy: "edit_privacy",
    flagClip: "flag_clip",
    hasRestrictedPrivacyOptions: "has_restricted_privacy_options",
    legalHold: "legal_hold",
    lmsExport: "lms_export",
    setContentRating: "set_content_rating",
    textTranslations: "text_translations",
    transcriptVideoEditor: "transcript_video_editor",
    viewPrivacy: "view_privacy",
    viewTeamMembers: "view_team_members",
  },
});
