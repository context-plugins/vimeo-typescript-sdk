import { s, type Schema } from "../core/index.js";
import { autoCcLangSchema, type AutoCcLang } from "./auto-cc-lang.js";
import { embed7Schema, type Embed7 } from "./embed7.js";
import { eventTypeSchema, type EventType } from "./event-type.js";
import {
  interactionToolsSettingsSchema,
  type InteractionToolsSettings,
} from "./interaction-tools-settings.js";
import { latency2Schema, type Latency2 } from "./latency2.js";
import { playlistSort2Schema, type PlaylistSort2 } from "./playlist-sort2.js";
import { preferredStreamMethodSchema, type PreferredStreamMethod } from "./preferred-stream-method.js";
import { scheduleSchema, type Schedule } from "./schedule.js";
import { streamEmbedSchema, type StreamEmbed } from "./stream-embed.js";
import { streamPrivacy2Schema, type StreamPrivacy2 } from "./stream-privacy2.js";

export type LiveEventsRequest1 = {
  allowShareLink?: boolean;
  autoCcEnabled?: boolean;
  autoCcKeywords?: string;
  autoCcLang?: AutoCcLang;
  automaticallyTitleStream?: boolean;
  chatEnabled?: boolean;
  contentRating?: string[];
  disableAutoArchiving?: boolean;
  dvr?: boolean;
  embed?: Embed7;
  eventType?: EventType;
  folderUri?: string;
  interactionToolsSettings?: InteractionToolsSettings;
  latency?: Latency2;
  playlistSort?: PlaylistSort2;
  preferredStreamMethod?: PreferredStreamMethod;
  rtmpPreview?: boolean;
  schedule?: Schedule;
  scheduledPlayback?: boolean;
  srtEncryptionEnabled?: boolean;
  streamDescription?: string;
  streamEmbed?: StreamEmbed;
  streamPassword?: string;
  streamPrivacy?: StreamPrivacy2;
  streamTitle?: string;
  streamingAutoStop?: boolean;
  timeZone?: string;
  title: string;
  unlimitedDuration?: boolean;
  venueUuid?: string;
};

export const liveEventsRequest1Schema: Schema<LiveEventsRequest1> = s.object<LiveEventsRequest1>({
  allowShareLink: s.optional(s.boolean()),
  autoCcEnabled: s.optional(s.boolean()),
  autoCcKeywords: s.optional(s.string()),
  autoCcLang: s.optional(s.lazy(() => autoCcLangSchema)),
  automaticallyTitleStream: s.optional(s.boolean()),
  chatEnabled: s.optional(s.boolean()),
  contentRating: s.optional(s.array(s.string())),
  disableAutoArchiving: s.optional(s.boolean()),
  dvr: s.optional(s.boolean()),
  embed: s.optional(s.lazy(() => embed7Schema)),
  eventType: s.optional(s.lazy(() => eventTypeSchema)),
  folderUri: s.optional(s.string()),
  interactionToolsSettings: s.optional(s.lazy(() => interactionToolsSettingsSchema)),
  latency: s.optional(s.lazy(() => latency2Schema)),
  playlistSort: s.optional(s.lazy(() => playlistSort2Schema)),
  preferredStreamMethod: s.optional(s.lazy(() => preferredStreamMethodSchema)),
  rtmpPreview: s.optional(s.boolean()),
  schedule: s.optional(s.lazy(() => scheduleSchema)),
  scheduledPlayback: s.optional(s.boolean()),
  srtEncryptionEnabled: s.optional(s.boolean()),
  streamDescription: s.optional(s.string()),
  streamEmbed: s.optional(s.lazy(() => streamEmbedSchema)),
  streamPassword: s.optional(s.string()),
  streamPrivacy: s.optional(s.lazy(() => streamPrivacy2Schema)),
  streamTitle: s.optional(s.string()),
  streamingAutoStop: s.optional(s.boolean()),
  timeZone: s.optional(s.string()),
  title: s.string(),
  unlimitedDuration: s.optional(s.boolean()),
  venueUuid: s.optional(s.string()),
  _keysMap: {
    allowShareLink: "allow_share_link",
    autoCcEnabled: "auto_cc_enabled",
    autoCcKeywords: "auto_cc_keywords",
    autoCcLang: "auto_cc_lang",
    automaticallyTitleStream: "automatically_title_stream",
    chatEnabled: "chat_enabled",
    contentRating: "content_rating",
    disableAutoArchiving: "disable_auto_archiving",
    eventType: "event_type",
    folderUri: "folder_uri",
    interactionToolsSettings: "interaction_tools_settings",
    playlistSort: "playlist_sort",
    preferredStreamMethod: "preferred_stream_method",
    rtmpPreview: "rtmp_preview",
    scheduledPlayback: "scheduled_playback",
    srtEncryptionEnabled: "srt_encryption_enabled",
    streamDescription: "stream_description",
    streamEmbed: "stream_embed",
    streamPassword: "stream_password",
    streamPrivacy: "stream_privacy",
    streamTitle: "stream_title",
    streamingAutoStop: "streaming_auto_stop",
    timeZone: "time_zone",
    unlimitedDuration: "unlimited_duration",
    venueUuid: "venue_uuid",
  },
});
