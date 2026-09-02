import { s, type Schema } from "../core/index.js";
import { customizationSchema, type Customization } from "./customization.js";
import { playerSchema, type Player } from "./player.js";

export type VideoPageSettings = {
  askAi: boolean;
  categories: boolean;
  chapters?: boolean;
  collections: boolean;
  comments: boolean;
  creativeCommons: boolean;
  credits: boolean;
  customization?: Customization;
  dateAdded: boolean;
  description: boolean;
  download: boolean;
  like: boolean;
  owner: boolean;
  player?: Player;
  portrait: boolean;
  share: boolean;
  tags: boolean;
  title?: boolean;
  transcript?: boolean;
  uploader: boolean;
  uri?: string;
  views: boolean;
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
