import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { oauth2RefreshableScheme, oauth2Scheme } from "./core/auth/oauth2-schemes.js";
import {
  oauth2AuthorizationCodeStrategy,
  oauth2ClientCredentialsStrategy,
} from "./core/auth/oauth2-strategies.js";
import { bearerAuth } from "./core/auth/schemes.js";
import type { RawClient } from "./core/raw-client.js";
import type { Servers } from "./servers.js";

export type AuthSchemes = {
  readonly bearer: AuthScheme;
  readonly oauth2AuthorizationCode: AuthScheme;
  readonly oauth2ClientCredentials: AuthScheme;
};

export function buildAuthSchemes(
  options: ClientOptions,
  servers: Servers,
  rawClient: RawClient,
): AuthSchemes {
  return {
    bearer: bearerAuth(options.bearer),
    oauth2AuthorizationCode: oauth2RefreshableScheme(
      options.oauth2AuthorizationCode,
      options.oauth2AuthorizationCodeStrategy ??
        oauth2AuthorizationCodeStrategy({
          authorizationUrl: servers.default("/oauth/authorize"),
          tokenUrl: servers.default("/oauth/access_token"),
          rawClient,
          placement: "header",
        }),
    ),
    oauth2ClientCredentials: oauth2Scheme(
      options.oauth2ClientCredentials,
      options.oauth2ClientCredentialsStrategy ??
        oauth2ClientCredentialsStrategy({
          tokenUrl: servers.default("/oauth/authorize/client"),
          rawClient,
          placement: "header",
        }),
    ),
  };
}
