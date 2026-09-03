import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { colorsSchema, type Colors } from "./colors.js";
import { embedPropertiesSchema, type EmbedProperties } from "./embed-properties.js";
import { logos2Schema, type Logos2 } from "./logos2.js";
import { playButtonPositionSchema, type PlayButtonPosition } from "./play-button-position.js";

export type Embed3 = {
  airplay: boolean;
  autoplay: boolean;
  availablePlayerLogos: string[];
  byline: boolean;
  chatEmbedSource: string | null;
  chromecast: boolean;
  closedCaptions: boolean;
  color: string;
  colors: Colors;
  embedChat: string | null;
  embedProperties: EmbedProperties | null;
  eventSchedule: boolean;
  fullscreenButton: boolean;
  hideLiveLabel: boolean;
  hideViewerCount: boolean;
  html: string | null;
  likeButton: boolean;
  logos: Logos2;
  loop: boolean;
  pip: boolean;
  playButtonPosition: PlayButtonPosition;
  playbar: boolean;
  playlist: boolean;
  portrait: boolean;
  responsiveHtml: string | null;
  schedule: boolean;
  showLatestArchivedClip: boolean;
  showTimezone: boolean;
  title: boolean;
  transcript: boolean;
  useColor: string;
  volume: boolean;
};

export const embed3Schema: Schema<Embed3> = s.object<Embed3>({
  airplay: s.boolean(),
  autoplay: s.boolean(),
  availablePlayerLogos: s.array(s.string()),
  byline: s.boolean(),
  chatEmbedSource: s.nullable(s.string()),
  chromecast: s.boolean(),
  closedCaptions: s.boolean(),
  color: s.string(),
  colors: colorsSchema,
  embedChat: s.nullable(s.string()),
  embedProperties: s.nullable(s.lazy(() => embedPropertiesSchema)),
  eventSchedule: s.boolean(),
  fullscreenButton: s.boolean(),
  hideLiveLabel: s.boolean(),
  hideViewerCount: s.boolean(),
  html: s.nullable(s.string()),
  likeButton: s.boolean(),
  logos: logos2Schema,
  loop: s.boolean(),
  pip: s.boolean(),
  playButtonPosition: playButtonPositionSchema,
  playbar: s.boolean(),
  playlist: s.boolean(),
  portrait: s.boolean(),
  responsiveHtml: s.nullable(s.string()),
  schedule: s.boolean(),
  showLatestArchivedClip: s.boolean(),
  showTimezone: s.boolean(),
  title: s.boolean(),
  transcript: s.boolean(),
  useColor: s.string(),
  volume: s.boolean(),
  _keysMap: {
    availablePlayerLogos: "available_player_logos",
    chatEmbedSource: "chat_embed_source",
    closedCaptions: "closed_captions",
    embedChat: "embed_chat",
    embedProperties: "embed_properties",
    eventSchedule: "event_schedule",
    fullscreenButton: "fullscreen_button",
    hideLiveLabel: "hide_live_label",
    hideViewerCount: "hide_viewer_count",
    likeButton: "like_button",
    playButtonPosition: "play_button_position",
    responsiveHtml: "responsive_html",
    showLatestArchivedClip: "show_latest_archived_clip",
    showTimezone: "show_timezone",
    useColor: "use_color",
  },
});
