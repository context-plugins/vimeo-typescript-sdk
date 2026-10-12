import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
  /** Whether AirPlay is enabled in the embeddable player. */
  airplay: boolean;
  /** Whether Ask AI is enabled in the embeddable player. */
  askAi: boolean;
  /** Whether multiple audio tracks can appear in the embeddable player. */
  audioTracks: boolean;
  /** Whether automatic picture-in-picture is enabled. */
  autopip: boolean;
  /** Whether the video autoplays in the embeddable player. */
  autoplay: boolean;
  /** A collection of the video's badges. */
  badges: Badges;
  /**
   * A collection of information about the buttons that appear on the interface of the embeddable
   * player.
   */
  buttons: Buttons;
  /** A collection of cards associated with the selected video. */
  cards: Card[];
  /**
   * Whether clicking the closed-captions button reveals the caption-language menu in the embeddable
   * player.
   */
  ccTrackMenu: boolean;
  /** Whether chapters are enabled in the embeddable player. */
  chapters: boolean;
  /** Whether the Chromecast button appears in the embeddable player. */
  chromecast: boolean;
  /** Whether closed captions are enabled in the embeddable player. */
  closedCaptions: boolean;
  /**
   * The second player color, which controls the player accent color. _This field is identical to
   * **colors.color_two**._
   */
  color: string;
  /** A collection of information about player colors. */
  colors: Colors;
  /** Whether the right-click context menu appears in the embeddable player. */
  contextMenu: boolean;
  /** The email capture form settings associated with the video. _This field is deprecated._ */
  emailCaptureForm: Record<string, unknown>;
  /**
   * A collection of information about the embeddable player's end screen. The API returns an empty
   * array instead of an object when no end screen is configured for the video.
   */
  endScreen: EndScreen3;
  /** Whether the embedded player should display the event schedule. */
  eventSchedule: boolean;
  /** Whether the video has cards. */
  hasCards: boolean;
  /** The HTML code for embedding the video on a web page. */
  html?: string;
  /** Whether the video is an interactive video. */
  interactive: boolean;
  /** A collection of information about the logo in the corner of the embeddable player. */
  logos: Logos;
  /** Whether the video starts muted in the embeddable player. */
  muted: boolean;
  /**
   * The type of the video outro.
   *
   * Option descriptions:
   *  * `beginning` - The outro is a thumbnail.
   *  * `custom` - The outro is custom.
   *  * `email` - The outro is an email form.
   *  * `image` - The outro is an image.
   *  * `link` - The outro is a link.
   *  * `loop` - The outro is a loop.
   *  * `nothing` - There is no outro.
   *  * `share` - The outro is a share button.
   *  * `text` - The outro is text.
   *  * `threevideos` - The outro is three video suggestions.
   *  * `videos` - The outro is video suggestions.
   */
  outroType: OutroType;
  /** Whether picture-in-picture is enabled and the button appears in the embeddable player. */
  pip: boolean;
  /** A representation of the play button's settings. */
  playButton: PlayButton;
  /** Whether the playbar appears in the embeddable player. */
  playbar: boolean;
  /** Whether the quality selector appears in the embeddable player. */
  qualitySelector: boolean;
  /** The sentiment widget configuration for the video. */
  sentimentWidgets: SentimentWidget[];
  /** Whether the embedded player displays the schedule timezone. */
  showTimezone: boolean;
  /** Whether users can skip forward in the embeddable player. */
  skippingForward: boolean;
  /** Whether the speed controls appear in the embeddable player. */
  speed: boolean;
  /** A collection of information about the embeddable player's title bar. */
  title: Title;
  /** Whether the transcript controls appear in the embeddable player. */
  transcript: boolean;
  /** The URI of the embed preset. */
  uri?: string;
  /** Whether the volume controls appear in the embeddable player. */
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
