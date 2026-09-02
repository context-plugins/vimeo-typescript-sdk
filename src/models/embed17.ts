import { s, type Schema } from "../core/index.js";
import { buttons2Schema, type Buttons2 } from "./buttons2.js";
import { colors6Schema, type Colors6 } from "./colors6.js";
import { endScreen2Schema, type EndScreen2 } from "./end-screen2.js";
import { logos8Schema, type Logos8 } from "./logos8.js";
import { playButton3Schema, type PlayButton3 } from "./play-button3.js";
import { title2Schema, type Title2 } from "./title2.js";

export type Embed17 = {
  airplay?: boolean;
  audioTracks?: boolean;
  buttons?: Buttons2;
  ccTrackMenu?: boolean;
  chapters?: boolean;
  chromecast?: boolean;
  closedCaptions?: boolean;
  color?: string;
  colors?: Colors6;
  endScreen?: EndScreen2;
  logos?: Logos8;
  playButton?: PlayButton3;
  playbar?: boolean;
  qualitySelector?: boolean;
  skippingForward?: boolean;
  speed?: boolean;
  title?: Title2;
  transcript?: boolean;
  volume?: boolean;
};

export const embed17Schema: Schema<Embed17> = s.object<Embed17>({
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
  speed: s.optional(s.boolean()),
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
