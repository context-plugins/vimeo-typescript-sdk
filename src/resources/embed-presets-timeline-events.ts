import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { pictureSchema, type Picture } from "../models/picture.js";
import type { Servers } from "../servers.js";

export class EmbedPresetsTimelineEvents {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createVideoCustomLogo(
    request: EmbedPresetsTimelineEvents.CreateVideoCustomLogoRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, EmbedPresetsTimelineEvents.CreateVideoCustomLogoError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/videos/{video_id}/timelinethumbnails"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: EmbedPresetsTimelineEvents.CreateVideoCustomLogoError,
      },
      options,
    );
  }

  getVideoCustomLogo(
    request: EmbedPresetsTimelineEvents.GetVideoCustomLogoRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, EmbedPresetsTimelineEvents.GetVideoCustomLogoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/timelinethumbnails/{thumbnail_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "thumbnail_id", value: request.thumbnailId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: EmbedPresetsTimelineEvents.GetVideoCustomLogoError,
      },
      options,
    );
  }
}

export namespace EmbedPresetsTimelineEvents {
  export type CreateVideoCustomLogoRequest = {
    videoId: number;
  };

  export class CreateVideoCustomLogoError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<CreateVideoCustomLogoError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVideoCustomLogoRequest = {
    thumbnailId: number;
    videoId: number;
  };

  export class GetVideoCustomLogoError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetVideoCustomLogoError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
