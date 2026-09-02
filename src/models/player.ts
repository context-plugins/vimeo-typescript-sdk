import { s, type Schema } from "../core/index.js";
import { colors1Schema, type Colors1 } from "./colors1.js";
import { logos1Schema, type Logos1 } from "./logos1.js";
import { playButton1Schema, type PlayButton1 } from "./play-button1.js";

export type Player = {
  airplay?: boolean;
  audioTracks?: boolean;
  autoplay?: boolean;
  ccTrackMenu?: boolean;
  chromecast?: boolean;
  closedCaptions?: boolean;
  colors?: Colors1;
  contextMenu?: boolean;
  fullscreen?: boolean;
  logos?: Logos1;
  muted?: boolean;
  pip?: boolean;
  playButton?: PlayButton1;
  playbar?: boolean;
  qualitySelector?: boolean;
  skippingForward?: boolean;
  speed?: boolean;
  volume?: boolean;
};

export const playerSchema: Schema<Player> = s.object<Player>({
  airplay: s.optional(s.boolean()),
  audioTracks: s.optional(s.boolean()),
  autoplay: s.optional(s.boolean()),
  ccTrackMenu: s.optional(s.boolean()),
  chromecast: s.optional(s.boolean()),
  closedCaptions: s.optional(s.boolean()),
  colors: s.optional(s.lazy(() => colors1Schema)),
  contextMenu: s.optional(s.boolean()),
  fullscreen: s.optional(s.boolean()),
  logos: s.optional(s.lazy(() => logos1Schema)),
  muted: s.optional(s.boolean()),
  pip: s.optional(s.boolean()),
  playButton: s.optional(s.lazy(() => playButton1Schema)),
  playbar: s.optional(s.boolean()),
  qualitySelector: s.optional(s.boolean()),
  skippingForward: s.optional(s.boolean()),
  speed: s.optional(s.boolean()),
  volume: s.optional(s.boolean()),
  _keysMap: {
    audioTracks: "audio_tracks",
    ccTrackMenu: "cc_track_menu",
    closedCaptions: "closed_captions",
    contextMenu: "context_menu",
    playButton: "play_button",
    qualitySelector: "quality_selector",
    skippingForward: "skipping_forward",
  },
});
