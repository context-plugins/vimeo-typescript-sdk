import { s, type Schema } from "../core/index.js";
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
  banner: BannerConfig;
  layout: LayoutConfig;
  navigation: NavigationConfig;
  playback: PlaybackConfig;
  showAccountName: ShowAccountName;
  showAvatar: ShowAvatar;
  showVideoDescription: ShowVideoDescription;
  showVideoDetails: ShowVideoDetails;
  showVideoPlayerCards: ShowVideoPlayerCards;
  showVideoTitle: ShowVideoTitle;
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
