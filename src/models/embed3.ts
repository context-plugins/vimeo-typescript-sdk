import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { colorsSchema, type Colors } from "./colors.js";
import { embedPropertiesSchema, type EmbedProperties } from "./embed-properties.js";
import { logos2Schema, type Logos2 } from "./logos2.js";
import { playButtonPositionSchema, type PlayButtonPosition } from "./play-button-position.js";

/** The event's embed data. */
export type Embed3 = {
  /** Whether AirPlay is enabled in the embeddable player. */
  airplay: boolean;
  /** Whether the embedded RLE player should autoplay the RLE content. */
  autoplay: boolean;
  /** The list of user-uploaded logos for configuration of the embed player. */
  availablePlayerLogos: string[];
  /** Whether the embedded RLE player should display the author's name. */
  byline: boolean;
  /** The chat's iFrame source URL. */
  chatEmbedSource: string | null;
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
  /** The embed code for RLE chat. */
  embedChat: string | null;
  /** The height, width, and source URL properties used to generate the fixed HTML embed code. */
  embedProperties: EmbedProperties | null;
  /** Whether the embedded RLE player should display the event schedule. */
  eventSchedule: boolean;
  /** Whether the embedded RLE player should include the fullscreen controls. */
  fullscreenButton: boolean;
  /** Whether the Live label should be visible over the player. */
  hideLiveLabel: boolean;
  /** Whether the embedded RLE player should hide the viewer counter. */
  hideViewerCount: boolean;
  /** The fixed HTML code to embed the event's playlist on a website. */
  html: string | null;
  /** Whether the embedded RLE player should include the button for likes. */
  likeButton: boolean;
  /** A collection of information about the logo in the corner of the embeddable player. */
  logos: Logos2;
  /**
   * Whether the embedded RLE player should loop back to the first video once content is exhausted.
   */
  loop: boolean;
  /** Whether picture-in-picture is enabled and the button appears in the embeddable player. */
  pip: boolean;
  /**
   * The position of the player's play button.
   *
   * Option descriptions:
   *  * `0` - The play button has the default position.
   *  * `1` - The play button appears at the bottom of the interface.
   *  * `2` - The play button appears in the center of the interface.
   */
  playButtonPosition: PlayButtonPosition;
  /** Whether the embedded RLE player should include the playbar. */
  playbar: boolean;
  /** Whether the playlist component appears in the embeddable player for this RLE. */
  playlist: boolean;
  /** Whether the embedded RLE player should display the author's portrait. */
  portrait: boolean;
  /** The responsive HTML code to embed the event's playlist on a website. */
  responsiveHtml: string | null;
  /** Whether the schedule component appears in the embeddable player for this RLE. */
  schedule: boolean;
  /** Whether the embedded RLE player should display the latest video placeholder. */
  showLatestArchivedClip: boolean;
  /** Whether the embedded RLE player should display the schedule timezone. */
  showTimezone: boolean;
  /** Whether the embedded RLE player should display the video title. */
  title: boolean;
  /** Whether transcripts are enabled in the embeddable player. */
  transcript: boolean;
  /** Whether the embedded RLE player should use a custom color or the default Vimeo blue. */
  useColor: string;
  /** Whether the embedded RLE player should include the volume controls. */
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
