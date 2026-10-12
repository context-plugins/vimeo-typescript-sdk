import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { position1Schema, type Position1 } from "./position1.js";

/** Optional logo to display inline with the video title. */
export type Logo = {
  /**
   * The canonical CDN URL of the selected custom logo, re-derived server-side from the underlying
   * brand-kit or player logo.
   */
  customLogoUrl?: string | null;
  /** Whether to display the logo next to the title. */
  enabled?: boolean;
  /** Where the logo renders relative to the title. Null until the logo is enabled. */
  position?: Position1 | null;
};

export const logoSchema: Schema<Logo> = s.object<Logo>({
  customLogoUrl: s.optionalNullable(s.string()),
  enabled: s.optional(s.boolean()),
  position: s.optionalNullable(s.lazy(() => position1Schema)),
  _keysMap: {
    customLogoUrl: "custom_logo_url",
  },
});
