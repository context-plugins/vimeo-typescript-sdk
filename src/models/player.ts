import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { colors1Schema, type Colors1 } from "./colors1.js";
import { logos1Schema, type Logos1 } from "./logos1.js";
import { playButton1Schema, type PlayButton1 } from "./play-button1.js";

/** The contents of the player group. */
export type Player = {
  /** Whether AirPlay is enabled in the video page player. */
  airplay?: boolean;
  /** Whether multiple audio tracks can appear in the video page player. */
  audioTracks?: boolean;
  /**
   * Whether the video automatically plays for viewers without their own autoplay preference (e.g.
   * logged-out visitors).
   */
  autoplay?: boolean;
  /**
   * Whether clicking the closed-captions button reveals the caption-language menu in the video page
   * player.
   */
  ccTrackMenu?: boolean;
  /** Whether the Chromecast button appears in the video page player. */
  chromecast?: boolean;
  /** Whether closed captions are enabled in the video page player. */
  closedCaptions?: boolean;
  /** A collection of information about the colors in the video page player. */
  colors?: Colors1;
  /** Whether the right-click menu is shown in the video page player. */
  contextMenu?: boolean;
  /** Whether to display the button for fullscreen mode on the video page. */
  fullscreen?: boolean;
  /** A collection of information about the logo in the corner of the onsite player. */
  logos?: Logos1;
  /** Whether the video is muted by default for viewers. */
  muted?: boolean;
  /** Whether picture-in-picture is enabled in the video page player. */
  pip?: boolean;
  /** A representation of the play button's settings. */
  playButton?: PlayButton1;
  /** Whether to display the playbar on the video page. */
  playbar?: boolean;
  /** Whether the quality selector appears in the video page player. */
  qualitySelector?: boolean;
  /** Whether to enable users to skip forward in the embeddable player. */
  skippingForward?: boolean;
  /** Whether to display speed options in the video page player. */
  speed?: boolean;
  /** Whether to display the volume control on the video page. */
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
