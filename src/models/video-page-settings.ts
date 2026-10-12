import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customizationSchema, type Customization } from "./customization.js";
import { playerSchema, type Player } from "./player.js";

export type VideoPageSettings = {
  /** Whether to display the button for Vimeo AI on the video page. */
  askAi: boolean;
  /** Whether to display video categories on the video page. */
  categories: boolean;
  /** Whether to display the button for chapters on the video page. */
  chapters?: boolean;
  /** Whether to display collections on the video page. */
  collections: boolean;
  /** Whether to display comments on the video page. */
  comments: boolean;
  /** Whether to display the video's Creative Commons license on the video page. */
  creativeCommons: boolean;
  /** Whether to display credits for the video on the video page. */
  credits: boolean;
  /**
   * The contents of the page customization group (background color, title font, and inline logo).
   */
  customization?: Customization;
  /** Whether to display the date when the video was added on the video page. */
  dateAdded: boolean;
  /** Whether to display the video's description on the video page. */
  description: boolean;
  /** Whether to display the button for downloads on the video page. */
  download: boolean;
  /** Whether to display the button for likes on the video page. */
  like: boolean;
  /** Whether to display the video owner's user name on the video page. */
  owner: boolean;
  /** The contents of the player group. */
  player?: Player;
  /** Whether to display the video owner's avatar on the video page. */
  portrait: boolean;
  /** Whether to display the button for shares on the video page. */
  share: boolean;
  /** Whether to display tags for the video on the video page. */
  tags: boolean;
  /** Whether to display the video title on the video page. */
  title?: boolean;
  /** Whether to display the button for transcripts on the video page. */
  transcript?: boolean;
  /** Whether to display the video's uploader on the video page. */
  uploader: boolean;
  /** The URI of the page preset. */
  uri?: string;
  /** Whether to display the number of views that the video has received on the video page. */
  views: boolean;
  /** Whether to display the button for watching later on the video page. */
  watchLater: boolean;
};

export const videoPageSettingsSchema: Schema<VideoPageSettings> = s.object<VideoPageSettings>({
  askAi: s.boolean(),
  categories: s.boolean(),
  chapters: s.optional(s.boolean()),
  collections: s.boolean(),
  comments: s.boolean(),
  creativeCommons: s.boolean(),
  credits: s.boolean(),
  customization: s.optional(s.lazy(() => customizationSchema)),
  dateAdded: s.boolean(),
  description: s.boolean(),
  download: s.boolean(),
  like: s.boolean(),
  owner: s.boolean(),
  player: s.optional(s.lazy(() => playerSchema)),
  portrait: s.boolean(),
  share: s.boolean(),
  tags: s.boolean(),
  title: s.optional(s.boolean()),
  transcript: s.optional(s.boolean()),
  uploader: s.boolean(),
  uri: s.optional(s.string()),
  views: s.boolean(),
  watchLater: s.boolean(),
  _keysMap: {
    askAi: "ask_ai",
    creativeCommons: "creative_commons",
    dateAdded: "date_added",
    watchLater: "watch_later",
  },
});
