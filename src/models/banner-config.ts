import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { showBannerDescriptionSchema, type ShowBannerDescription } from "./show-banner-description.js";
import { showBannerHeaderSchema, type ShowBannerHeader } from "./show-banner-header.js";
import { showBannerTitleSchema, type ShowBannerTitle } from "./show-banner-title.js";
import { showBannerSchema, type ShowBanner } from "./show-banner.js";
import { showShowcaseOwnerAvatarSchema, type ShowShowcaseOwnerAvatar } from "./show-showcase-owner-avatar.js";
import { showStartWatchingButtonSchema, type ShowStartWatchingButton } from "./show-start-watching-button.js";

export type BannerConfig = {
  showBanner: ShowBanner;
  showBannerDescription: ShowBannerDescription;
  showBannerHeader: ShowBannerHeader;
  showBannerTitle: ShowBannerTitle;
  showShowcaseOwnerAvatar: ShowShowcaseOwnerAvatar;
  showStartWatchingButton: ShowStartWatchingButton;
};

export const bannerConfigSchema: Schema<BannerConfig> = s.object<BannerConfig>({
  showBanner: showBannerSchema,
  showBannerDescription: showBannerDescriptionSchema,
  showBannerHeader: showBannerHeaderSchema,
  showBannerTitle: showBannerTitleSchema,
  showShowcaseOwnerAvatar: showShowcaseOwnerAvatarSchema,
  showStartWatchingButton: showStartWatchingButtonSchema,
  _keysMap: {
    showBanner: "show_banner",
    showBannerDescription: "show_banner_description",
    showBannerHeader: "show_banner_header",
    showBannerTitle: "show_banner_title",
    showShowcaseOwnerAvatar: "show_showcase_owner_avatar",
    showStartWatchingButton: "show_start_watching_button",
  },
});
