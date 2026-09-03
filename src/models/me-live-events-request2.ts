import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { autoCcLanguage2Schema, type AutoCcLanguage2 } from "./auto-cc-language2.js";
import { embed9Schema, type Embed9 } from "./embed9.js";
import {
  interactionToolsSettingsSchema,
  type InteractionToolsSettings,
} from "./interaction-tools-settings.js";
import { landingPageLogo2Schema, type LandingPageLogo2 } from "./landing-page-logo2.js";
import { latency2Schema, type Latency2 } from "./latency2.js";
import { playlistSort2Schema, type PlaylistSort2 } from "./playlist-sort2.js";
import { preferredStreamMethodSchema, type PreferredStreamMethod } from "./preferred-stream-method.js";
import { scheduleSchema, type Schedule } from "./schedule.js";
import { streamEmbedSchema, type StreamEmbed } from "./stream-embed.js";
import { streamModeSchema, type StreamMode } from "./stream-mode.js";
import { streamPrivacy2Schema, type StreamPrivacy2 } from "./stream-privacy2.js";

export type MeLiveEventsRequest2 = {
  autoCcEnabled?: boolean;
  autoCcKeywords?: string;
  autoCcLanguage?: AutoCcLanguage2;
  automaticallyTitleStream?: boolean;
  chatEnabled?: boolean;
  contentRating?: string[];
  disableAutoArchiving?: boolean;
  dvr?: boolean;
  embed?: Embed9;
  interactionToolsSettings?: InteractionToolsSettings;
  landingPageLogo?: LandingPageLogo2;
  latency?: Latency2;
  playlistSort?: PlaylistSort2;
  preferredStreamMethod?: PreferredStreamMethod;
  schedule?: Schedule;
  scheduledPlayback?: boolean;
  srtEncryptionEnabled?: boolean;
  streamDescription?: string;
  streamEmbed?: StreamEmbed;
  streamMode?: StreamMode;
  streamPassword?: string;
  streamPrivacy?: StreamPrivacy2;
  streamTitle?: string;
  streamingAutoStop?: boolean;
  timeZone?: string;
  title?: string;
  unlimitedDuration?: boolean;
};

export const meLiveEventsRequest2Schema: Schema<MeLiveEventsRequest2> = s.object<MeLiveEventsRequest2>({
  autoCcEnabled: s.optional(s.boolean()),
  autoCcKeywords: s.optional(s.string()),
  autoCcLanguage: s.optional(s.lazy(() => autoCcLanguage2Schema)),
  automaticallyTitleStream: s.optional(s.boolean()),
  chatEnabled: s.optional(s.boolean()),
  contentRating: s.optional(s.array(s.string())),
  disableAutoArchiving: s.optional(s.boolean()),
  dvr: s.optional(s.boolean()),
  embed: s.optional(s.lazy(() => embed9Schema)),
  interactionToolsSettings: s.optional(s.lazy(() => interactionToolsSettingsSchema)),
  landingPageLogo: s.optional(s.lazy(() => landingPageLogo2Schema)),
  latency: s.optional(s.lazy(() => latency2Schema)),
  playlistSort: s.optional(s.lazy(() => playlistSort2Schema)),
  preferredStreamMethod: s.optional(s.lazy(() => preferredStreamMethodSchema)),
  schedule: s.optional(s.lazy(() => scheduleSchema)),
  scheduledPlayback: s.optional(s.boolean()),
  srtEncryptionEnabled: s.optional(s.boolean()),
  streamDescription: s.optional(s.string()),
  streamEmbed: s.optional(s.lazy(() => streamEmbedSchema)),
  streamMode: s.optional(s.lazy(() => streamModeSchema)),
  streamPassword: s.optional(s.string()),
  streamPrivacy: s.optional(s.lazy(() => streamPrivacy2Schema)),
  streamTitle: s.optional(s.string()),
  streamingAutoStop: s.optional(s.boolean()),
  timeZone: s.optional(s.string()),
  title: s.optional(s.string()),
  unlimitedDuration: s.optional(s.boolean()),
  _keysMap: {
    autoCcEnabled: "auto_cc_enabled",
    autoCcKeywords: "auto_cc_keywords",
    autoCcLanguage: "auto_cc_language",
    automaticallyTitleStream: "automatically_title_stream",
    chatEnabled: "chat_enabled",
    contentRating: "content_rating",
    disableAutoArchiving: "disable_auto_archiving",
    interactionToolsSettings: "interaction_tools_settings",
    landingPageLogo: "landing_page_logo",
    playlistSort: "playlist_sort",
    preferredStreamMethod: "preferred_stream_method",
    scheduledPlayback: "scheduled_playback",
    srtEncryptionEnabled: "srt_encryption_enabled",
    streamDescription: "stream_description",
    streamEmbed: "stream_embed",
    streamMode: "stream_mode",
    streamPassword: "stream_password",
    streamPrivacy: "stream_privacy",
    streamTitle: "stream_title",
    streamingAutoStop: "streaming_auto_stop",
    timeZone: "time_zone",
    unlimitedDuration: "unlimited_duration",
  },
});
