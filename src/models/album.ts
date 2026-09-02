import { s, type Schema } from "../core/index.js";
import { domainCertificateStateSchema, type DomainCertificateState } from "./domain-certificate-state.js";
import { embed2Schema, type Embed2 } from "./embed2.js";
import { layoutSchema, type Layout } from "./layout.js";
import { metadata11Schema, type Metadata11 } from "./metadata11.js";
import { pictureSchema, type Picture } from "./picture.js";
import { privacy5Schema, type Privacy5 } from "./privacy5.js";
import { showcaseConfigSchema, type ShowcaseConfig } from "./showcase-config.js";
import { sortSchema, type Sort } from "./sort.js";
import { themeSchema, type Theme } from "./theme.js";
import { userSchema, type User } from "./user.js";

export type Album = {
  allowContinuousPlay: boolean;
  allowDownloads: boolean;
  allowShare: boolean;
  allowedPrivacies: string[];
  autoplay: boolean;
  brandColor: string | null;
  config: ShowcaseConfig;
  createdTime: string;
  customLogo: Picture | null;
  customThumbnail: Picture;
  description: string | null;
  domain: string | null;
  domainCertificateState: DomainCertificateState;
  duration: number;
  embed: Embed2;
  embedBrandColor: boolean | null;
  embedCustomLogo: boolean | null;
  hasChosenThumbnail: boolean;
  hasFeaturedContent: boolean;
  hideFromVimeo: boolean;
  hideNav: boolean;
  hideUpcoming: boolean;
  hideVimeoLogo: boolean | null;
  layout: Layout;
  link: string;
  loop: boolean;
  metadata: Metadata11;
  modifiedTime: string;
  name: string;
  pictures: Picture;
  privacy: Privacy5;
  resourceKey: string;
  reviewMode: boolean;
  seoAllowIndexed: boolean;
  seoDescription: string | null;
  seoKeywords: string[];
  seoTitle: string | null;
  shareLink: string;
  sort: Sort;
  theme: Theme;
  thumbnailType: number;
  totalClips: number;
  unlistedHash?: string;
  uri: string;
  url: string | null;
  useCustomDomain: boolean;
  user: User;
  webBrandColor: boolean;
  webCustomLogo: boolean;
};

export const albumSchema: Schema<Album> = s.object<Album>({
  allowContinuousPlay: s.boolean(),
  allowDownloads: s.boolean(),
  allowShare: s.boolean(),
  allowedPrivacies: s.array(s.string()),
  autoplay: s.boolean(),
  brandColor: s.nullable(s.string()),
  config: showcaseConfigSchema,
  createdTime: s.string(),
  customLogo: s.nullable(s.lazy(() => pictureSchema)),
  customThumbnail: pictureSchema,
  description: s.nullable(s.string()),
  domain: s.nullable(s.string()),
  domainCertificateState: domainCertificateStateSchema,
  duration: s.number(),
  embed: embed2Schema,
  embedBrandColor: s.nullable(s.boolean()),
  embedCustomLogo: s.nullable(s.boolean()),
  hasChosenThumbnail: s.boolean(),
  hasFeaturedContent: s.boolean(),
  hideFromVimeo: s.boolean(),
  hideNav: s.boolean(),
  hideUpcoming: s.boolean(),
  hideVimeoLogo: s.nullable(s.boolean()),
  layout: layoutSchema,
  link: s.string(),
  loop: s.boolean(),
  metadata: metadata11Schema,
  modifiedTime: s.string(),
  name: s.string(),
  pictures: pictureSchema,
  privacy: privacy5Schema,
  resourceKey: s.string(),
  reviewMode: s.boolean(),
  seoAllowIndexed: s.boolean(),
  seoDescription: s.nullable(s.string()),
  seoKeywords: s.array(s.string()),
  seoTitle: s.nullable(s.string()),
  shareLink: s.string(),
  sort: sortSchema,
  theme: themeSchema,
  thumbnailType: s.number(),
  totalClips: s.number(),
  unlistedHash: s.optional(s.string()),
  uri: s.string(),
  url: s.nullable(s.string()),
  useCustomDomain: s.boolean(),
  user: userSchema,
  webBrandColor: s.boolean(),
  webCustomLogo: s.boolean(),
  _keysMap: {
    allowContinuousPlay: "allow_continuous_play",
    allowDownloads: "allow_downloads",
    allowShare: "allow_share",
    allowedPrivacies: "allowed_privacies",
    brandColor: "brand_color",
    createdTime: "created_time",
    customLogo: "custom_logo",
    customThumbnail: "custom_thumbnail",
    domainCertificateState: "domain_certificate_state",
    embedBrandColor: "embed_brand_color",
    embedCustomLogo: "embed_custom_logo",
    hasChosenThumbnail: "has_chosen_thumbnail",
    hasFeaturedContent: "has_featured_content",
    hideFromVimeo: "hide_from_vimeo",
    hideNav: "hide_nav",
    hideUpcoming: "hide_upcoming",
    hideVimeoLogo: "hide_vimeo_logo",
    modifiedTime: "modified_time",
    resourceKey: "resource_key",
    reviewMode: "review_mode",
    seoAllowIndexed: "seo_allow_indexed",
    seoDescription: "seo_description",
    seoKeywords: "seo_keywords",
    seoTitle: "seo_title",
    shareLink: "share_link",
    thumbnailType: "thumbnail_type",
    totalClips: "total_clips",
    unlistedHash: "unlisted_hash",
    useCustomDomain: "use_custom_domain",
    webBrandColor: "web_brand_color",
    webCustomLogo: "web_custom_logo",
  },
});
