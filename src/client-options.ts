import type {
  OAuth2AuthorizationCodeCredentials,
  OAuth2ClientCredentials,
  TokenProvider,
} from "./core/auth/credentials.js";
import type { OAuth2RefreshableTokenStrategy, OAuth2TokenStrategy } from "./core/auth/oauth2-strategies.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  readonly bearer?: TokenProvider | undefined;
  readonly oauth2AuthorizationCode?: OAuth2AuthorizationCodeCredentials | undefined;
  readonly oauth2AuthorizationCodeStrategy?:
    | OAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials>
    | undefined;
  readonly oauth2ClientCredentials?: OAuth2ClientCredentials | undefined;
  readonly oauth2ClientCredentialsStrategy?: OAuth2TokenStrategy<OAuth2ClientCredentials> | undefined;
};

type ServerOptions = {
  /** Vimeo.com */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
