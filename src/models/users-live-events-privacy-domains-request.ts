import { s, type Schema } from "../core/index.js";

export type UsersLiveEventsPrivacyDomainsRequest = {
  allowedDomains?: string[];
};

export const usersLiveEventsPrivacyDomainsRequestSchema: Schema<UsersLiveEventsPrivacyDomainsRequest> =
  s.object<UsersLiveEventsPrivacyDomainsRequest>({
    allowedDomains: s.optional(s.array(s.string())),
    _keysMap: {
      allowedDomains: "allowed_domains",
    },
  });
