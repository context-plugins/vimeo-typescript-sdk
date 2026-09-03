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

export type Interactions3 = {
  album: Album4 | null;
  askAi: AskAi;
  askAiManager: AskAiManager;
  askAiViewer: AskAiViewer;
  buy: Buy | null;
  canComment?: boolean;
  canReactToCollabComments: boolean;
  canRequestTeamRoleUpgrade: CanRequestTeamRoleUpgrade;
  canUpdatePrivacyToPublic: CanUpdatePrivacyToPublic;
  channel: Channel1;
  createEditor: CreateEditor;
  delete: Delete;
  edit: Edit;
  editPrivacy: EditPrivacy;
  flagClip?: boolean;
  hasRestrictedPrivacyOptions: HasRestrictedPrivacyOptions;
  highlights: Highlights;
  interact?: boolean;
  invite: Invite;
  legalHold: LegalHold;
  like: Like;
  lmsExport?: Record<string, unknown>;
  rent: Rent | null;
  report: Report1;
  setContentRating: SetContentRating;
  subscribe?: Subscribe | null;
  summary: Summary;
  textTranslations: TextTranslations;
  transcriptVideoEditor: TranscriptVideoEditor;
  translations: Translations;
  trim: Trim;
  validate: Validate;
  viewPrivacy: ViewPrivacy;
  viewTeamMembers: ViewTeamMembers;
  watched: Watched;
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
