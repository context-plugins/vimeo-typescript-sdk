import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReviewLink = {
  allowComments: boolean;
  allowDownloads: boolean;
  allowStatusChange: boolean;
  createdOn: string;
  expiresOn: string;
  hideEndCards: boolean;
  isDark: boolean;
  isEnabled: boolean;
  logoUrl: string;
  modifiedOn: string;
  name: string;
  password: string | null;
  showAllVersions: boolean;
  showMyLogo: boolean;
  showResolvedComments: boolean;
  uri: string;
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
