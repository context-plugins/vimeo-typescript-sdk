import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { buttons1Schema, type Buttons1 } from "./buttons1.js";
import { bylineSchema, type Byline } from "./byline.js";
import { colors5Schema, type Colors5 } from "./colors5.js";
import { endScreen1Schema, type EndScreen1 } from "./end-screen1.js";
import { outroSchema, type Outro } from "./outro.js";
import { playButtonSchema, type PlayButton } from "./play-button.js";
import { portrait1Schema, type Portrait1 } from "./portrait1.js";
import { title1Schema, type Title1 } from "./title1.js";

/** The contents of the preset group. */
export type Settings1 = {
  /** Whether AirPlay is enabled in the embeddable player. */
  airplay: boolean;
  /** Whether Ask AI is enabled in the embeddable player. */
  askAi: boolean;
  /** Whether multiple audio tracks can appear in the embeddable player. */
  audioTracks: boolean;
  buttons: Buttons1;
  /**
   * How the embeddable player handles the video owner's information.
   *
   * Option descriptions:
   *  * `hide` - The owner's information is hidden.
   *  * `show` - The owner's information is shown.
   *  * `user` - The owner's information can be toggled to `show` or `hide` by the user.
   */
  byline: Byline;
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
  colors: Colors5;
  /** A representation of the end screen settings. */
  endScreen: EndScreen1;
  outro: Outro;
  /** Whether picture-in-picture is enabled and the button appears in the embeddable player. */
  pip: boolean;
  /** A representation of the play button's settings. */
  playButton: PlayButton;
  /** Whether the playbar appears in the embeddable player. */
  playbar: boolean;
  /**
   * How the embeddable player handles the video owner's portrait.
   *
   * Option descriptions:
   *  * `hide` - The owner's portrait is hidden.
   *  * `show` - The owner's portrait is shown.
   *  * `user` - The owner's portrait can be toggled to `show` or `hide` by the user.
   */
  portrait: Portrait1;
  /** Whether to show the quality selector in the embeddable player. */
  qualitySelector: boolean;
  /** Whether users can skip forward in the embeddable player. */
  skippingForward: boolean;
  /** Whether the speed controls appear in the embeddable player. */
  speed: boolean;
  /**
   * How the embeddable player handles the video title.
   *
   * Option descriptions:
   *  * `hide` - The title is hidden.
   *  * `show` - The title is shown.
   *  * `user` - The title can be toggled to `show` or `hide` by the user.
   */
  title: Title1;
  /** Whether the transcript controls appear in the embeddable player. */
  transcript: boolean;
  /** Whether the volume controls appear in the embeddable player. */
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
