import { s, type Schema } from "../core/index.js";
import { badgesSchema, type Badges } from "./badges.js";
import { buttonsSchema, type Buttons } from "./buttons.js";
import { cardSchema, type Card } from "./card.js";
import { colorsSchema, type Colors } from "./colors.js";
import { logosSchema, type Logos } from "./logos.js";
import { outroTypeSchema, type OutroType } from "./outro-type.js";
import { playButtonSchema, type PlayButton } from "./play-button.js";
import { sentimentWidgetSchema, type SentimentWidget } from "./sentiment-widget.js";
import { titleSchema, type Title } from "./title.js";
import { endScreen3Schema, type EndScreen3 } from "./unions/end-screen3.js";

export type EmbedSettings = {
  airplay: boolean;
  askAi: boolean;
  audioTracks: boolean;
  autopip: boolean;
  autoplay: boolean;
  badges: Badges;
  buttons: Buttons;
  cards: Card[];
  ccTrackMenu: boolean;
  chapters: boolean;
  chromecast: boolean;
  closedCaptions: boolean;
  color: string;
  colors: Colors;
  contextMenu: boolean;
  emailCaptureForm: Record<string, unknown>;
  endScreen: EndScreen3;
  eventSchedule: boolean;
  hasCards: boolean;
  html?: string;
  interactive: boolean;
  logos: Logos;
  muted: boolean;
  outroType: OutroType;
  pip: boolean;
  playButton: PlayButton;
  playbar: boolean;
  qualitySelector: boolean;
  sentimentWidgets: SentimentWidget[];
  showTimezone: boolean;
  skippingForward: boolean;
  speed: boolean;
  title: Title;
  transcript: boolean;
  uri?: string;
  volume: boolean;
};

export const embedSettingsSchema: Schema<EmbedSettings> = s.object<EmbedSettings>({
  airplay: s.boolean(),
  askAi: s.boolean(),
  audioTracks: s.boolean(),
  autopip: s.boolean(),
  autoplay: s.boolean(),
  badges: badgesSchema,
  buttons: buttonsSchema,
  cards: s.array(s.lazy(() => cardSchema)),
  ccTrackMenu: s.boolean(),
  chapters: s.boolean(),
  chromecast: s.boolean(),
  closedCaptions: s.boolean(),
  color: s.string(),
  colors: colorsSchema,
  contextMenu: s.boolean(),
  emailCaptureForm: s.record(s.string(), s.unknown()),
  endScreen: endScreen3Schema,
  eventSchedule: s.boolean(),
  hasCards: s.boolean(),
  html: s.optional(s.string()),
  interactive: s.boolean(),
  logos: logosSchema,
  muted: s.boolean(),
  outroType: outroTypeSchema,
  pip: s.boolean(),
  playButton: playButtonSchema,
  playbar: s.boolean(),
  qualitySelector: s.boolean(),
  sentimentWidgets: s.array(s.lazy(() => sentimentWidgetSchema)),
  showTimezone: s.boolean(),
  skippingForward: s.boolean(),
  speed: s.boolean(),
  title: titleSchema,
  transcript: s.boolean(),
  uri: s.optional(s.string()),
  volume: s.boolean(),
  _keysMap: {
    askAi: "ask_ai",
    audioTracks: "audio_tracks",
    ccTrackMenu: "cc_track_menu",
    closedCaptions: "closed_captions",
    contextMenu: "context_menu",
    emailCaptureForm: "email_capture_form",
    endScreen: "end_screen",
    eventSchedule: "event_schedule",
    hasCards: "has_cards",
    outroType: "outro_type",
    playButton: "play_button",
    qualitySelector: "quality_selector",
    sentimentWidgets: "sentiment_widgets",
    showTimezone: "show_timezone",
    skippingForward: "skipping_forward",
  },
});
