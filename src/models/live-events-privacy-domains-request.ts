import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LiveEventsPrivacyDomainsRequest = {
  /** An array of the domains on which the embedded event can appear. */
  allowedDomains?: string[];
};

export const liveEventsPrivacyDomainsRequestSchema: Schema<LiveEventsPrivacyDomainsRequest> =
  s.object<LiveEventsPrivacyDomainsRequest>({
    allowedDomains: s.optional(s.array(s.string())),
    _keysMap: {
      allowedDomains: "allowed_domains",
    },
  });
