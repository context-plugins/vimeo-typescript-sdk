import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
  /** Whether the showcase permits continuous play. */
  allowContinuousPlay: boolean;
  /** Whether the showcase permits downloads. */
  allowDownloads: boolean;
  /** Whether the showcase permits sharing. */
  allowShare: boolean;
  /** An array of privacy settings supported for this showcase and the requesting user. */
  allowedPrivacies: string[];
  /**
   * Whether to start playback of the next video in the showcase's embedded playlist immediately
   * after the previous video finishes.
   */
  autoplay: boolean;
  /** The hexadecimal color code for the color of the player buttons and showcase controls. */
  brandColor: string | null;
  /** The showcase's configuration settings. */
  config: ShowcaseConfig;
  /** The time in ISO 8601 format when the showcase was created. */
  createdTime: string;
  /** The custom logo of the showcase. */
  customLogo: Picture | null;
  /** The custom thumbnail image of the showcase. */
  customThumbnail: Picture;
  /** A brief description of the showcase's content. */
  description: string | null;
  /** The custom domain of the showcase. */
  domain: string | null;
  /**
   * The state of the SSL certificate that is associated with the showcase's domain.
   *
   * Option descriptions:
   *  * `0` - The new certificate has yet to be processed.
   *  * `1` - The new certificate is being processed in the queue.
   *  * `2` - The certificate is being processed for renewal in the queue.
   *  * `3` - The new certificate has failed to be issued in the queue.
   *  * `4` - The certificate has failed to be renewed in the queue.
   *  * `5` - The certificate has been successfully issued.
   *  * `6` - The certificate has been successfully renewed.
   *  * `7` - The certificate has failed in the polling flow.
   *  * `8` - The certificate has failed to be renewed in the polling flow.
   *  * `null` - There is no associated HTTPS domain with this showcase.
   */
  domainCertificateState: DomainCertificateState;
  /** The total duration in seconds of all the videos in the showcase. */
  duration: number;
  /** Embed data for the showcase. */
  embed: Embed2;
  /**
   * Whether to show the showcase's custom brand color in the player of the showcase's embedded
   * playlist.
   */
  embedBrandColor: boolean | null;
  /**
   * Whether to show the showcase's custom logo in the player of the showcase's embedded playlist.
   */
  embedCustomLogo: boolean | null;
  /** Whether the showcase has a thumbnail. */
  hasChosenThumbnail: boolean;
  /** Whether the showcase has featured content. */
  hasFeaturedContent: boolean;
  /** Whether the showcase should be hidden from Vimeo when unlisted. */
  hideFromVimeo: boolean;
  /** Whether to hide Vimeo navigation when displaying the showcase. */
  hideNav: boolean;
  /** Whether to include the upcoming event in the showcase. */
  hideUpcoming: boolean;
  /** Whether to hide the Vimeo logo in the player of the showcase's embedded playlist. */
  hideVimeoLogo: boolean | null;
  /**
   * The type of layout for presenting the showcase.
   *
   * Option descriptions:
   *  * `grid` - The showcase videos appear in a grid.
   *  * `player` - The showcase videos appear in the player.
   */
  layout: Layout;
  /** The URL of the showcase. */
  link: string;
  /**
   * Whether automatic playback restarts at the top of the showcase's embedded playlist after
   * reaching the end of the last video in the playlist.
   */
  loop: boolean;
  /** Metadata about the showcase. */
  metadata: Metadata11;
  /** The time in ISO 8601 format when the showcase was last modified. */
  modifiedTime: string;
  /** The display name of the showcase. */
  name: string;
  /** The active image of the showcase. */
  pictures: Picture;
  /** The privacy settings of the showcase. */
  privacy: Privacy5;
  /** The resource key of the showcase. */
  resourceKey: string;
  /** Whether showcase videos use the review mode URL. */
  reviewMode: boolean;
  /** Whether search engines can index the showcase. */
  seoAllowIndexed: boolean;
  /** The SEO description of the showcase. */
  seoDescription: string | null;
  /** The SEO keywords of the showcase. */
  seoKeywords: string[];
  /** The SEO title of the showcase. */
  seoTitle: string | null;
  /** The URL for sharing the showcase. */
  shareLink: string;
  /**
   * The sort order of the showcase.
   *
   * Option descriptions:
   *  * `added_first` - Sort the showcase videos in order of those most recently added.
   *  * `added_last` - Sort the showcase videos in order of those least recently added.
   *  * `alphabetical` - Sort the showcase videos alphabetically.
   *  * `arranged` - Sort the showcase videos according to their custom arrangement.
   *  * `comments` - Sort the showcase videos by number of comments.
   *  * `likes` - Sort the showcase videos by number of likes.
   *  * `newest` - Sort the showcase videos in order of creation date with the newest first.
   *  * `oldest` - Sort the showcase videos in order of creation date with the oldest first.
   *  * `plays` - Sort the showcase videos by number of plays.
   */
  sort: Sort;
  /**
   * The color theme of the showcase.
   *
   * Option descriptions:
   *  * `dark` - The showcase uses the dark theme.
   *  * `standard` - The showcase uses the standard theme.
   */
  theme: Theme;
  /**
   * The showcase's thumbnail type. The value of this field can be `0` when no thumbnail is chosen,
   * `1` when a video or event's thumbnail is chosen, `2` when a specific frame from a video is
   * chosen, and `3` when a custom image is chosen.
   */
  thumbnailType: number;
  /** The total number of videos in the showcase. */
  totalClips: number;
  /**
   * The unlisted hash of the showcase. Omit this hash from the showcase URL to prevent access to
   * the showcase on Vimeo.
   */
  unlistedHash?: string;
  /** The URI of the showcase. */
  uri: string;
  /** The custom Vimeo URL of the showcase. */
  url: string | null;
  /** Whether the showcase uses a custom domain. */
  useCustomDomain: boolean;
  /** The owner of the showcase. */
  user: User;
  /** Whether to use the showcase's brand color in the web layout. */
  webBrandColor: boolean;
  /** Whether to use the showcase's custom logo in the web layout. */
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
  duration: s.float64(),
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
  thumbnailType: s.float64(),
  totalClips: s.float64(),
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
