import { s, type Schema } from "../core/index.js";
import { buttons1Schema, type Buttons1 } from "./buttons1.js";
import { bylineSchema, type Byline } from "./byline.js";
import { colors5Schema, type Colors5 } from "./colors5.js";
import { endScreen1Schema, type EndScreen1 } from "./end-screen1.js";
import { outroSchema, type Outro } from "./outro.js";
import { playButtonSchema, type PlayButton } from "./play-button.js";
import { portrait1Schema, type Portrait1 } from "./portrait1.js";
import { title1Schema, type Title1 } from "./title1.js";

export type Settings1 = {
  airplay: boolean;
  askAi: boolean;
  audioTracks: boolean;
  buttons: Buttons1;
  byline: Byline;
  ccTrackMenu: boolean;
  chapters: boolean;
  chromecast: boolean;
  closedCaptions: boolean;
  color: string;
  colors: Colors5;
  endScreen: EndScreen1;
  outro: Outro;
  pip: boolean;
  playButton: PlayButton;
  playbar: boolean;
  portrait: Portrait1;
  qualitySelector: boolean;
  skippingForward: boolean;
  speed: boolean;
  title: Title1;
  transcript: boolean;
  volume: boolean;
};

export const settings1Schema: Schema<Settings1> = s.object<Settings1>({
  airplay: s.boolean(),
  askAi: s.boolean(),
  audioTracks: s.boolean(),
  buttons: buttons1Schema,
  byline: bylineSchema,
  ccTrackMenu: s.boolean(),
  chapters: s.boolean(),
  chromecast: s.boolean(),
  closedCaptions: s.boolean(),
  color: s.string(),
  colors: colors5Schema,
  endScreen: endScreen1Schema,
  outro: outroSchema,
  pip: s.boolean(),
  playButton: playButtonSchema,
  playbar: s.boolean(),
  portrait: portrait1Schema,
  qualitySelector: s.boolean(),
  skippingForward: s.boolean(),
  speed: s.boolean(),
  title: title1Schema,
  transcript: s.boolean(),
  volume: s.boolean(),
  _keysMap: {
    askAi: "ask_ai",
    audioTracks: "audio_tracks",
    ccTrackMenu: "cc_track_menu",
    closedCaptions: "closed_captions",
    endScreen: "end_screen",
    playButton: "play_button",
    qualitySelector: "quality_selector",
    skippingForward: "skipping_forward",
  },
});
