import { s, type Schema } from "../core/index.js";
import { licenseSchema, type License } from "./license.js";
import { privacy1Schema, type Privacy1 } from "./privacy1.js";
import { ratingSchema, type Rating } from "./rating.js";

export type Videos4 = {
  autoGenerateReviewLink: boolean;
  autoccDisplayEnabledByDefault: boolean;
  embedPresetUri?: string;
  hideStats: boolean;
  keepSourceFiles: boolean;
  license: License | null;
  pagePresetUri?: string;
  password?: string;
  privacy?: Privacy1;
  rating: Rating;
  sharingLinkDefaultExpiryDays: number;
};

export const videos4Schema: Schema<Videos4> = s.object<Videos4>({
  autoGenerateReviewLink: s.boolean(),
  autoccDisplayEnabledByDefault: s.boolean(),
  embedPresetUri: s.optional(s.string()),
  hideStats: s.boolean(),
  keepSourceFiles: s.boolean(),
  license: s.nullable(s.lazy(() => licenseSchema)),
  pagePresetUri: s.optional(s.string()),
  password: s.optional(s.string()),
  privacy: s.optional(s.lazy(() => privacy1Schema)),
  rating: ratingSchema,
  sharingLinkDefaultExpiryDays: s.number(),
  _keysMap: {
    autoGenerateReviewLink: "auto_generate_review_link",
    autoccDisplayEnabledByDefault: "autocc_display_enabled_by_default",
    embedPresetUri: "embed_preset_uri",
    hideStats: "hide_stats",
    keepSourceFiles: "keep_source_files",
    pagePresetUri: "page_preset_uri",
    sharingLinkDefaultExpiryDays: "sharing_link_default_expiry_days",
  },
});
