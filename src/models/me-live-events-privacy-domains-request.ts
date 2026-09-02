import { s, type Schema } from "../core/index.js";

export type MeLiveEventsPrivacyDomainsRequest = {
  allowedDomains?: string[];
};

export const meLiveEventsPrivacyDomainsRequestSchema: Schema<MeLiveEventsPrivacyDomainsRequest> =
  s.object<MeLiveEventsPrivacyDomainsRequest>({
    allowedDomains: s.optional(s.array(s.string())),
    _keysMap: {
      allowedDomains: "allowed_domains",
    },
  });
