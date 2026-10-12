import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bannerConfigSchema, type BannerConfig } from "./banner-config.js";
import { layoutConfigSchema, type LayoutConfig } from "./layout-config.js";
import { navigationConfigSchema, type NavigationConfig } from "./navigation-config.js";
import { playbackConfigSchema, type PlaybackConfig } from "./playback-config.js";
import { showAccountNameSchema, type ShowAccountName } from "./show-account-name.js";
import { showAvatarSchema, type ShowAvatar } from "./show-avatar.js";
import { showVideoDescriptionSchema, type ShowVideoDescription } from "./show-video-description.js";
import { showVideoDetailsSchema, type ShowVideoDetails } from "./show-video-details.js";
import { showVideoPlayerCardsSchema, type ShowVideoPlayerCards } from "./show-video-player-cards.js";
import { showVideoTitleSchema, type ShowVideoTitle } from "./show-video-title.js";
import { textCtaAlignmentSchema, type TextCtaAlignment } from "./text-cta-alignment.js";

export type ShowcaseConfig = {
  /** An object containing the showcase's banner display settings. */
  banner: BannerConfig;
  /** An object containing the showcase's layout display settings. */
  layout: LayoutConfig;
  /** An object containing the showcase's navigation display settings. */
  navigation: NavigationConfig;
  /** An object containing the showcase's playback display settings. */
  playback: PlaybackConfig;
  /** Information about showing the account name on the showcase page. */
  showAccountName: ShowAccountName;
  /** Information about showing the avatar on the showcase page. */
  showAvatar: ShowAvatar;
  /** Information about showing the description on the showcase page. */
  showVideoDescription: ShowVideoDescription;
  /** Information about showing video details on the showcase page. */
  showVideoDetails: ShowVideoDetails;
  /** Information about showing video player cards on the showcase page. */
  showVideoPlayerCards: ShowVideoPlayerCards;
  /** Information about showing the title on the showcase page. */
  showVideoTitle: ShowVideoTitle;
  /** Information about the alignment of the call-to-action text on the showcase page. */
  textCtaAlignment: TextCtaAlignment;
};

export const showcaseConfigSchema: Schema<ShowcaseConfig> = s.object<ShowcaseConfig>({
  banner: bannerConfigSchema,
  layout: layoutConfigSchema,
  navigation: navigationConfigSchema,
  playback: playbackConfigSchema,
  showAccountName: showAccountNameSchema,
  showAvatar: showAvatarSchema,
  showVideoDescription: showVideoDescriptionSchema,
  showVideoDetails: showVideoDetailsSchema,
  showVideoPlayerCards: showVideoPlayerCardsSchema,
  showVideoTitle: showVideoTitleSchema,
  textCtaAlignment: textCtaAlignmentSchema,
  _keysMap: {
    showAccountName: "show_account_name",
    showAvatar: "show_avatar",
    showVideoDescription: "show_video_description",
    showVideoDetails: "show_video_details",
    showVideoPlayerCards: "show_video_player_cards",
    showVideoTitle: "show_video_title",
    textCtaAlignment: "text_cta_alignment",
  },
});
