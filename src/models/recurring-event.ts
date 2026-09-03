import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { album2Schema, type Album2 } from "./album2.js";
import { apiAppSchema, type ApiApp } from "./api-app.js";
import { autoCcLanguageSchema, type AutoCcLanguage } from "./auto-cc-language.js";
import { contentRating2Schema, type ContentRating2 } from "./content-rating2.js";
import { domainSchema, type Domain } from "./domain.js";
import { emailQuotaSchema, type EmailQuota } from "./email-quota.js";
import { embed3Schema, type Embed3 } from "./embed3.js";
import { eventScheduleSchema, type EventSchedule } from "./event-schedule.js";
import { interactionToolsSettingSchema, type InteractionToolsSetting } from "./interaction-tools-setting.js";
import { landingPageLogoSchema, type LandingPageLogo } from "./landing-page-logo.js";
import { latencySchema, type Latency } from "./latency.js";
import { metadata15Schema, type Metadata15 } from "./metadata15.js";
import { pictureSchema, type Picture } from "./picture.js";
import { playlistSortSchema, type PlaylistSort } from "./playlist-sort.js";
import { preferredStreamMethodSchema, type PreferredStreamMethod } from "./preferred-stream-method.js";
import { projectSchema, type Project } from "./project.js";
import { recordingSchema, type Recording } from "./recording.js";
import { status11Schema, type Status11 } from "./status11.js";
import { streamModeSchema, type StreamMode } from "./stream-mode.js";
import { streamPrivacySchema, type StreamPrivacy } from "./stream-privacy.js";
import { userSchema, type User } from "./user.js";

export type RecurringEvent = {
  album: Album2 | null;
  allowShareLink: boolean;
  allowedPrivacies: string[];
  app: ApiApp | null;
  autoCcEnabled: boolean | null;
  autoCcKeywords: string | null;
  autoCcLanguage: AutoCcLanguage | null;
  autoCcLimit: number | null;
  autoCcRemaining: number | null;
  autoCcTranslationEnabled: boolean | null;
  autoCcTranslationLanguages: string[] | null;
  automaticallyTitleStream: boolean;
  backupStreamKey: string | null;
  chatEnabled: boolean;
  completedOn: string;
  contentRating: ContentRating2;
  createdTime: string;
  disableAutoArchiving: boolean;
  dvr: boolean;
  emailQuota: EmailQuota;
  embed: Embed3;
  eventType: string;
  fromShowcase: boolean;
  fromWebinar?: boolean;
  hasForcedLeadCaptureForm: boolean;
  headClip: Record<string, unknown> | null;
  interactionToolsSettings: InteractionToolsSetting[] | null;
  isStarredByCurUser: boolean;
  landingPageLogo: LandingPageLogo | null;
  latency: Latency;
  leadUuid: string;
  link: string;
  liveClips: string[];
  liveDestinations: string[] | null;
  metadata: Metadata15;
  nextOccurrenceTime: string | null;
  parentFolder: Project | null;
  pictures: Picture;
  playlistSort: PlaylistSort;
  preferredStreamMethod: PreferredStreamMethod;
  recordings: Recording[];
  rtmpLink: string | null;
  rtmpPreview: boolean;
  rtmpsLink: string | null;
  schedule: EventSchedule;
  scheduledPlayback: boolean;
  settingsLink: string;
  srtEncryptionEnabled: boolean;
  srtLink?: string;
  srtPassphrase: string | null;
  status: Status11 | null;
  streamDescription: string | null;
  streamKey: string | null;
  streamMode: StreamMode;
  streamPassword: string | null;
  streamPrivacy: StreamPrivacy;
  streamTitle: string;
  streamableClip: Record<string, unknown> | null;
  streamingAutoStop: boolean;
  timeZone: string;
  title: string;
  unlimitedAutoCc: boolean | null;
  unlimitedDuration: boolean;
  uri: string;
  user: User;
  venueUuid: string | null;
  viewLink: string;
  webinar: string[] | null;
  whitelistedDomains: Domain[] | null;
};

export const recurringEventSchema: Schema<RecurringEvent> = s.object<RecurringEvent>({
  album: s.nullable(s.lazy(() => album2Schema)),
  allowShareLink: s.boolean(),
  allowedPrivacies: s.array(s.string()),
  app: s.nullable(s.lazy(() => apiAppSchema)),
  autoCcEnabled: s.nullable(s.boolean()),
  autoCcKeywords: s.nullable(s.string()),
  autoCcLanguage: s.nullable(s.lazy(() => autoCcLanguageSchema)),
  autoCcLimit: s.nullable(s.number()),
  autoCcRemaining: s.nullable(s.number()),
  autoCcTranslationEnabled: s.nullable(s.boolean()),
  autoCcTranslationLanguages: s.nullable(s.array(s.string())),
  automaticallyTitleStream: s.boolean(),
  backupStreamKey: s.nullable(s.string()),
  chatEnabled: s.boolean(),
  completedOn: s.string(),
  contentRating: contentRating2Schema,
  createdTime: s.string(),
  disableAutoArchiving: s.boolean(),
  dvr: s.boolean(),
  emailQuota: emailQuotaSchema,
  embed: embed3Schema,
  eventType: s.string(),
  fromShowcase: s.boolean(),
  fromWebinar: s.optional(s.boolean()),
  hasForcedLeadCaptureForm: s.boolean(),
  headClip: s.nullable(s.record(s.string(), s.unknown())),
  interactionToolsSettings: s.nullable(s.array(s.lazy(() => interactionToolsSettingSchema))),
  isStarredByCurUser: s.boolean(),
  landingPageLogo: s.nullable(s.lazy(() => landingPageLogoSchema)),
  latency: latencySchema,
  leadUuid: s.string(),
  link: s.string(),
  liveClips: s.array(s.string()),
  liveDestinations: s.nullable(s.array(s.string())),
  metadata: metadata15Schema,
  nextOccurrenceTime: s.nullable(s.string()),
  parentFolder: s.nullable(s.lazy(() => projectSchema)),
  pictures: pictureSchema,
  playlistSort: playlistSortSchema,
  preferredStreamMethod: preferredStreamMethodSchema,
  recordings: s.array(s.lazy(() => recordingSchema)),
  rtmpLink: s.nullable(s.string()),
  rtmpPreview: s.boolean(),
  rtmpsLink: s.nullable(s.string()),
  schedule: eventScheduleSchema,
  scheduledPlayback: s.boolean(),
  settingsLink: s.string(),
  srtEncryptionEnabled: s.boolean(),
  srtLink: s.optional(s.string()),
  srtPassphrase: s.nullable(s.string()),
  status: s.nullable(s.lazy(() => status11Schema)),
  streamDescription: s.nullable(s.string()),
  streamKey: s.nullable(s.string()),
  streamMode: streamModeSchema,
  streamPassword: s.nullable(s.string()),
  streamPrivacy: streamPrivacySchema,
  streamTitle: s.string(),
  streamableClip: s.nullable(s.record(s.string(), s.unknown())),
  streamingAutoStop: s.boolean(),
  timeZone: s.string(),
  title: s.string(),
  unlimitedAutoCc: s.nullable(s.boolean()),
  unlimitedDuration: s.boolean(),
  uri: s.string(),
  user: userSchema,
  venueUuid: s.nullable(s.string()),
  viewLink: s.string(),
  webinar: s.nullable(s.array(s.string())),
  whitelistedDomains: s.nullable(s.array(s.lazy(() => domainSchema))),
  _keysMap: {
    allowShareLink: "allow_share_link",
    allowedPrivacies: "allowed_privacies",
    autoCcEnabled: "auto_cc_enabled",
    autoCcKeywords: "auto_cc_keywords",
    autoCcLanguage: "auto_cc_language",
    autoCcLimit: "auto_cc_limit",
    autoCcRemaining: "auto_cc_remaining",
    autoCcTranslationEnabled: "auto_cc_translation_enabled",
    autoCcTranslationLanguages: "auto_cc_translation_languages",
    automaticallyTitleStream: "automatically_title_stream",
    backupStreamKey: "backup_stream_key",
    chatEnabled: "chat_enabled",
    completedOn: "completed_on",
    contentRating: "content_rating",
    createdTime: "created_time",
    disableAutoArchiving: "disable_auto_archiving",
    emailQuota: "email_quota",
    eventType: "event_type",
    fromShowcase: "from_showcase",
    fromWebinar: "from_webinar",
    hasForcedLeadCaptureForm: "has_forced_lead_capture_form",
    headClip: "head_clip",
    interactionToolsSettings: "interaction_tools_settings",
    isStarredByCurUser: "is_starred_by_cur_user",
    landingPageLogo: "landing_page_logo",
    leadUuid: "lead_uuid",
    liveClips: "live_clips",
    liveDestinations: "live_destinations",
    nextOccurrenceTime: "next_occurrence_time",
    parentFolder: "parent_folder",
    playlistSort: "playlist_sort",
    preferredStreamMethod: "preferred_stream_method",
    rtmpLink: "rtmp_link",
    rtmpPreview: "rtmp_preview",
    rtmpsLink: "rtmps_link",
    scheduledPlayback: "scheduled_playback",
    settingsLink: "settings_link",
    srtEncryptionEnabled: "srt_encryption_enabled",
    srtLink: "srt_link",
    srtPassphrase: "srt_passphrase",
    streamDescription: "stream_description",
    streamKey: "stream_key",
    streamMode: "stream_mode",
    streamPassword: "stream_password",
    streamPrivacy: "stream_privacy",
    streamTitle: "stream_title",
    streamableClip: "streamable_clip",
    streamingAutoStop: "streaming_auto_stop",
    timeZone: "time_zone",
    unlimitedAutoCc: "unlimited_auto_cc",
    unlimitedDuration: "unlimited_duration",
    venueUuid: "venue_uuid",
    viewLink: "view_link",
    whitelistedDomains: "whitelisted_domains",
  },
});
