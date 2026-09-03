import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
