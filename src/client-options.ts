import type { FetchLike } from "./core/api-request.js";
import type {
  OAuth2AuthorizationCodeCredentials,
  OAuth2ClientCredentials,
  TokenProvider,
} from "./core/auth/credentials.js";
import type { OAuth2RefreshableTokenStrategy, OAuth2TokenStrategy } from "./core/auth/oauth2-strategies.js";
import { ServerEnvironment, type ServerOptions } from "./servers.js";

export type ClientOptions = {
  readonly serverEnvironment: ServerEnvironment;
  readonly serverOptions: ServerOptions;
  readonly timeout: number;
  readonly fetch?: FetchLike | undefined;
  readonly bearer?: TokenProvider | undefined;
  readonly oauth2AuthorizationCode?: OAuth2AuthorizationCodeCredentials | undefined;
  readonly oauth2AuthorizationCodeStrategy?:
    | OAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials>
    | undefined;
  readonly oauth2ClientCredentials?: OAuth2ClientCredentials | undefined;
  readonly oauth2ClientCredentialsStrategy?: OAuth2TokenStrategy<OAuth2ClientCredentials> | undefined;
};

export const DEFAULT_CLIENT_OPTIONS: ClientOptions = {
  serverEnvironment: ServerEnvironment.Production,
  serverOptions: {},
  timeout: 60_000,
};
