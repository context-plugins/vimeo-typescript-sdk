import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { buttons8Schema, type Buttons8 } from "./buttons8.js";
import { card2Schema, type Card2 } from "./card2.js";
import { endScreen4Schema, type EndScreen4 } from "./end-screen4.js";
import { logos16Schema, type Logos16 } from "./logos16.js";
import { playButton3Schema, type PlayButton3 } from "./play-button3.js";
import { sentimentWidget1Schema, type SentimentWidget1 } from "./sentiment-widget1.js";
import { title2Schema, type Title2 } from "./title2.js";

export type Embed29 = {
  /** Whether AirPlay is enabled in the embeddable player. */
  airplay?: boolean;
  /** Whether multiple audio tracks can appear in the embeddable player. */
  audioTracks?: boolean;
  buttons?: Buttons8;
  /** A collection of cards associated with the selected video. */
  cards?: Card2[];
  /**
   * Whether clicking the closed-captions button reveals the caption-language menu in the embeddable
   * player.
   */
  ccTrackMenu?: boolean;
  /** Whether chapters are enabled in the embeddable player. */
  chapters?: boolean;
  /** Whether the Chromecast button appears in the embeddable player. */
  chromecast?: boolean;
  /** Whether closed captions are enabled in the embeddable player. */
  closedCaptions?: boolean;
  /** The main color of the embeddable player. */
  color?: string;
  /** Whether the right-click context menu appears in the embeddable player. */
  contextMenu?: boolean;
  endScreen?: EndScreen4;
  logos?: Logos16;
  /** An object representing the play button's settings. */
  playButton?: PlayButton3;
  /** Whether to show the playbar on the embeddable player. */
  playbar?: boolean;
  /** Whether to show the quality selector in the embeddable player. */
  qualitySelector?: boolean;
  /** A collection of sentiment widget configurations for the video. */
  sentimentWidgets?: SentimentWidget1[];
  /** Whether users can skip forward in the embeddable player. */
  skippingForward?: boolean;
  title?: Title2;
  /** Whether the transcript controls appear in the embeddable player. */
  transcript?: boolean;
  /** Whether to show the volume selector on the embeddable player. */
  volume?: boolean;
};

export const embed29Schema: Schema<Embed29> = s.object<Embed29>({
  airplay: s.optional(s.boolean()),
  audioTracks: s.optional(s.boolean()),
  buttons: s.optional(s.lazy(() => buttons8Schema)),
  cards: s.optional(s.array(s.lazy(() => card2Schema))),
  ccTrackMenu: s.optional(s.boolean()),
  chapters: s.optional(s.boolean()),
  chromecast: s.optional(s.boolean()),
  closedCaptions: s.optional(s.boolean()),
  color: s.optional(s.string()),
  contextMenu: s.optional(s.boolean()),
  endScreen: s.optional(s.lazy(() => endScreen4Schema)),
  logos: s.optional(s.lazy(() => logos16Schema)),
  playButton: s.optional(s.lazy(() => playButton3Schema)),
  playbar: s.optional(s.boolean()),
  qualitySelector: s.optional(s.boolean()),
  sentimentWidgets: s.optional(s.array(s.lazy(() => sentimentWidget1Schema))),
  skippingForward: s.optional(s.boolean()),
  title: s.optional(s.lazy(() => title2Schema)),
  transcript: s.optional(s.boolean()),
  volume: s.optional(s.boolean()),
  _keysMap: {
    audioTracks: "audio_tracks",
    ccTrackMenu: "cc_track_menu",
    closedCaptions: "closed_captions",
    contextMenu: "context_menu",
    endScreen: "end_screen",
    playButton: "play_button",
    qualitySelector: "quality_selector",
    sentimentWidgets: "sentiment_widgets",
    skippingForward: "skipping_forward",
  },
});
