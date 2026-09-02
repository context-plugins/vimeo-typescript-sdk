import { s, type Schema } from "../core/index.js";

export type LiveEventsPrivacyDomainsRequest = {
  allowedDomains?: string[];
};

export const liveEventsPrivacyDomainsRequestSchema: Schema<LiveEventsPrivacyDomainsRequest> =
  s.object<LiveEventsPrivacyDomainsRequest>({
    allowedDomains: s.optional(s.array(s.string())),
    _keysMap: {
      allowedDomains: "allowed_domains",
    },
  });
