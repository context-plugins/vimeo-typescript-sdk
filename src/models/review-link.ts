import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReviewLink = {
  /** Whether to allow comments in the review. */
  allowComments: boolean;
  /** Whether downloads are permitted in the review. */
  allowDownloads: boolean;
  /** Whether a status change is permitted in the review. */
  allowStatusChange: boolean;
  /** The time in ISO 8601 format when the review was created. */
  createdOn: string;
  /** The time in ISO 8601 format when the review expires. */
  expiresOn: string;
  /** Whether to hide end cards (other videos) after playback. */
  hideEndCards: boolean;
  /** Whether the review link is in dark mode. */
  isDark: boolean;
  /** Whether the review link is enabled. */
  isEnabled: boolean;
  /** The link to the team logo from the brandkit. */
  logoUrl: string;
  /** The time in ISO 8601 format when the review was last modified. */
  modifiedOn: string;
  /** The name of the link. */
  name: string;
  /** The password for the review link. */
  password: string | null;
  /** Whether showing all versions is permitted in the review. */
  showAllVersions: boolean;
  /** Whether to display the user's logo in the review. */
  showMyLogo: boolean;
  /** Whether to show resolved comments in the review. */
  showResolvedComments: boolean;
  /** The canonical relative URI of the review link. */
  uri: string;
  /** The relative URL of the review link. */
  url: string;
};

export const reviewLinkSchema: Schema<ReviewLink> = s.object<ReviewLink>({
  allowComments: s.boolean(),
  allowDownloads: s.boolean(),
  allowStatusChange: s.boolean(),
  createdOn: s.string(),
  expiresOn: s.string(),
  hideEndCards: s.boolean(),
  isDark: s.boolean(),
  isEnabled: s.boolean(),
  logoUrl: s.string(),
  modifiedOn: s.string(),
  name: s.string(),
  password: s.nullable(s.string()),
  showAllVersions: s.boolean(),
  showMyLogo: s.boolean(),
  showResolvedComments: s.boolean(),
  uri: s.string(),
  url: s.string(),
  _keysMap: {
    allowComments: "allow_comments",
    allowDownloads: "allow_downloads",
    allowStatusChange: "allow_status_change",
    createdOn: "created_on",
    expiresOn: "expires_on",
    hideEndCards: "hide_end_cards",
    isDark: "is_dark",
    isEnabled: "is_enabled",
    logoUrl: "logo_url",
    modifiedOn: "modified_on",
    showAllVersions: "show_all_versions",
    showMyLogo: "show_my_logo",
    showResolvedComments: "show_resolved_comments",
  },
});
