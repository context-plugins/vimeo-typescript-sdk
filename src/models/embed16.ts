import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { buttons2Schema, type Buttons2 } from "./buttons2.js";
import { colors6Schema, type Colors6 } from "./colors6.js";
import { endScreen2Schema, type EndScreen2 } from "./end-screen2.js";
import { logos8Schema, type Logos8 } from "./logos8.js";
import { playButton3Schema, type PlayButton3 } from "./play-button3.js";
import { title2Schema, type Title2 } from "./title2.js";

export type Embed16 = {
  /** Whether AirPlay is enabled in the embeddable player. */
  airplay?: boolean;
  /** Whether multiple audio tracks can appear in the embeddable player. */
  audioTracks?: boolean;
  buttons?: Buttons2;
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
  colors?: Colors6;
  endScreen?: EndScreen2;
  logos?: Logos8;
  /** An object representing the play button's settings. */
  playButton?: PlayButton3;
  /** Whether to show the playbar on the embeddable player. */
  playbar?: boolean;
  /** Whether to show the quality selector in the embeddable player. */
  qualitySelector?: boolean;
  /** Whether users can skip forward in the embeddable player. */
  skippingForward?: boolean;
  title?: Title2;
  /** Whether the transcript controls appear in the embeddable player. */
  transcript?: boolean;
  /** Whether to show the volume selector on the embeddable player. */
  volume?: boolean;
};

export const embed16Schema: Schema<Embed16> = s.object<Embed16>({
  airplay: s.optional(s.boolean()),
  audioTracks: s.optional(s.boolean()),
  buttons: s.optional(s.lazy(() => buttons2Schema)),
  ccTrackMenu: s.optional(s.boolean()),
  chapters: s.optional(s.boolean()),
  chromecast: s.optional(s.boolean()),
  closedCaptions: s.optional(s.boolean()),
  color: s.optional(s.string()),
  colors: s.optional(s.lazy(() => colors6Schema)),
  endScreen: s.optional(s.lazy(() => endScreen2Schema)),
  logos: s.optional(s.lazy(() => logos8Schema)),
  playButton: s.optional(s.lazy(() => playButton3Schema)),
  playbar: s.optional(s.boolean()),
  qualitySelector: s.optional(s.boolean()),
  skippingForward: s.optional(s.boolean()),
  title: s.optional(s.lazy(() => title2Schema)),
  transcript: s.optional(s.boolean()),
  volume: s.optional(s.boolean()),
  _keysMap: {
    audioTracks: "audio_tracks",
    ccTrackMenu: "cc_track_menu",
    closedCaptions: "closed_captions",
    endScreen: "end_screen",
    playButton: "play_button",
    qualitySelector: "quality_selector",
    skippingForward: "skipping_forward",
  },
});
