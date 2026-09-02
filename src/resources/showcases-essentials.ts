import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
import { albumConnectionSchema, type AlbumConnection } from "../models/album-connection.js";
import { albumSchema, type Album } from "../models/album.js";
import { directionSchema, type Direction } from "../models/direction.js";
import { errorSchema, type Error } from "../models/error.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { meAlbumsCopyRequestSchema, type MeAlbumsCopyRequest } from "../models/me-albums-copy-request.js";
import { meAlbumsRequestSchema, type MeAlbumsRequest } from "../models/me-albums-request.js";
import { meAlbumsRequest1Schema, type MeAlbumsRequest1 } from "../models/me-albums-request1.js";
import { sort18Schema, type Sort18 } from "../models/sort18.js";
import {
  usersAlbumsCopyRequestSchema,
  type UsersAlbumsCopyRequest,
} from "../models/users-albums-copy-request.js";
import { usersAlbumsRequestSchema, type UsersAlbumsRequest } from "../models/users-albums-request.js";
import { usersAlbumsRequest1Schema, type UsersAlbumsRequest1 } from "../models/users-albums-request1.js";
import type { Servers } from "../servers.js";

export class ShowcasesEssentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  addFolderToShowcases(
    request: ShowcasesEssentials.AddFolderToShowcasesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShowcasesEssentials.AddFolderToShowcasesError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/users/{user_id}/albums/from_folder"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        query: [
          { name: "album_uris", value: request.albumUris, schema: s.string() },
          { name: "folder_id", value: request.folderId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShowcasesEssentials.AddFolderToShowcasesError,
      },
      options,
    );
  }

  copyShowcase(
    request: ShowcasesEssentials.CopyShowcaseRequest,
    options?: RequestOptions,
  ): ApiPromise<Album, ShowcasesEssentials.CopyShowcaseError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/users/{user_id}/albums/{album_id}/copy"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usersAlbumsCopyRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: albumSchema },
        errorFactory: ShowcasesEssentials.CopyShowcaseError,
      },
      options,
    );
  }

  copyShowcaseAlt2(
    request: ShowcasesEssentials.CopyShowcaseAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<Album, ShowcasesEssentials.CopyShowcaseAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/me/albums/{album_id}/copy"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "album_id", value: request.albumId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => meAlbumsCopyRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: albumSchema },
        errorFactory: ShowcasesEssentials.CopyShowcaseAlt2Error,
      },
      options,
    );
  }

  createShowcase(
    request: ShowcasesEssentials.CreateShowcaseRequest,
    options?: RequestOptions,
  ): ApiPromise<Album, ShowcasesEssentials.CreateShowcaseError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/users/{user_id}/albums"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: usersAlbumsRequestSchema },
      },
      {
        success: { kind: "json", schema: albumSchema },
        errorFactory: ShowcasesEssentials.CreateShowcaseError,
      },
      options,
    );
  }

  createShowcaseAlt1(
    request: ShowcasesEssentials.CreateShowcaseAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Album, ShowcasesEssentials.CreateShowcaseAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/me/albums"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        body: { kind: "json", value: request.body, schema: meAlbumsRequestSchema },
      },
      {
        success: { kind: "json", schema: albumSchema },
        errorFactory: ShowcasesEssentials.CreateShowcaseAlt1Error,
      },
      options,
    );
  }

  deleteShowcase(
    request: ShowcasesEssentials.DeleteShowcaseRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShowcasesEssentials.DeleteShowcaseError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/users/{user_id}/albums/{album_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShowcasesEssentials.DeleteShowcaseError,
      },
      options,
    );
  }

  deleteShowcaseAlt2(
    request: ShowcasesEssentials.DeleteShowcaseAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ShowcasesEssentials.DeleteShowcaseAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/me/albums/{album_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "album_id", value: request.albumId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ShowcasesEssentials.DeleteShowcaseAlt2Error,
      },
      options,
    );
  }

  editShowcase(
    request: ShowcasesEssentials.EditShowcaseRequest,
    options?: RequestOptions,
  ): ApiPromise<Album, ShowcasesEssentials.EditShowcaseError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/users/{user_id}/albums/{album_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usersAlbumsRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: albumSchema },
        errorFactory: ShowcasesEssentials.EditShowcaseError,
      },
      options,
    );
  }

  editShowcaseAlt2(
    request: ShowcasesEssentials.EditShowcaseAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<Album, ShowcasesEssentials.EditShowcaseAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/me/albums/{album_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "album_id", value: request.albumId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => meAlbumsRequest1Schema)) },
      },
      {
        success: { kind: "json", schema: albumSchema },
        errorFactory: ShowcasesEssentials.EditShowcaseAlt2Error,
      },
      options,
    );
  }

  getShowcase(
    request: ShowcasesEssentials.GetShowcaseRequest,
    options?: RequestOptions,
  ): ApiPromise<Album, ShowcasesEssentials.GetShowcaseError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/albums/{album_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: albumSchema },
        errorFactory: ShowcasesEssentials.GetShowcaseError,
      },
      options,
    );
  }

  getShowcaseAlt2(
    request: ShowcasesEssentials.GetShowcaseAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<Album, ShowcasesEssentials.GetShowcaseAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/albums/{album_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "album_id", value: request.albumId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: albumSchema },
        errorFactory: ShowcasesEssentials.GetShowcaseAlt2Error,
      },
      options,
    );
  }

  getShowcases(
    request: ShowcasesEssentials.GetShowcasesRequest,
    options?: RequestOptions,
  ): ApiPromise<AlbumConnection, ShowcasesEssentials.GetShowcasesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/albums"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter_privacy", value: request.filterPrivacy, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort18Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: albumConnectionSchema },
        errorFactory: ShowcasesEssentials.GetShowcasesError,
      },
      options,
    );
  }

  getShowcasesAlt1(
    request: ShowcasesEssentials.GetShowcasesAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<AlbumConnection, ShowcasesEssentials.GetShowcasesAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/albums"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        query: [
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => directionSchema)) },
          { name: "filter_privacy", value: request.filterPrivacy, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort18Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: albumConnectionSchema },
        errorFactory: ShowcasesEssentials.GetShowcasesAlt1Error,
      },
      options,
    );
  }

  updateShowcases(
    request: ShowcasesEssentials.UpdateShowcasesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "PATCH",
        url: this.#servers.default("/users/{user_id}/albums"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "user_id", value: request.userId, schema: s.number() }],
        query: [
          { name: "album_item_uris", value: request.albumItemUris, schema: s.string() },
          { name: "album_uris", value: request.albumUris, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace ShowcasesEssentials {
  export type AddFolderToShowcasesRequest = {
    userId: number;
    albumUris: string;
    folderId: number;
  };

  export class AddFolderToShowcasesError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<AddFolderToShowcasesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CopyShowcaseRequest = {
    albumId: number;
    userId: number;
    body?: UsersAlbumsCopyRequest;
  };

  export class CopyShowcaseError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<CopyShowcaseError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CopyShowcaseAlt2Request = {
    albumId: number;
    body?: MeAlbumsCopyRequest;
  };

  export class CopyShowcaseAlt2Error extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<CopyShowcaseAlt2Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CreateShowcaseRequest = {
    userId: number;
    body: UsersAlbumsRequest;
  };

  export class CreateShowcaseError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<CreateShowcaseError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CreateShowcaseAlt1Request = {
    body: MeAlbumsRequest;
  };

  export class CreateShowcaseAlt1Error extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<CreateShowcaseAlt1Error> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteShowcaseRequest = {
    albumId: number;
    userId: number;
  };

  export class DeleteShowcaseError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<DeleteShowcaseError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteShowcaseAlt2Request = {
    albumId: number;
  };

  export class DeleteShowcaseAlt2Error extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<DeleteShowcaseAlt2Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type EditShowcaseRequest = {
    albumId: number;
    userId: number;
    body?: UsersAlbumsRequest1;
  };

  export class EditShowcaseError extends ResponseError<
    | Declared<"legacyError", LegacyError>
    | Declared<"legacyError2", LegacyError>
    | Declared<"legacyError3", LegacyError>
  > {
    static readonly errors: ErrorDecoders<EditShowcaseError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError3", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type EditShowcaseAlt2Request = {
    albumId: number;
    body?: MeAlbumsRequest1;
  };

  export class EditShowcaseAlt2Error extends ResponseError<
    | Declared<"legacyError", LegacyError>
    | Declared<"legacyError2", LegacyError>
    | Declared<"legacyError3", LegacyError>
  > {
    static readonly errors: ErrorDecoders<EditShowcaseAlt2Error> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 403, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError3", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetShowcaseRequest = {
    albumId: number;
    userId: number;
  };

  export class GetShowcaseError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetShowcaseError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetShowcaseAlt2Request = {
    albumId: number;
  };

  export class GetShowcaseAlt2Error extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetShowcaseAlt2Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetShowcasesRequest = {
    userId: number;
    direction?: Direction;
    filterPrivacy?: string;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort18;
  };

  export class GetShowcasesError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetShowcasesError> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetShowcasesAlt1Request = {
    direction?: Direction;
    filterPrivacy?: string;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: Sort18;
  };

  export class GetShowcasesAlt1Error extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetShowcasesAlt1Error> = [
      { on: 400, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type UpdateShowcasesRequest = {
    userId: number;
    albumItemUris: string;
    albumUris: string;
  };
}
