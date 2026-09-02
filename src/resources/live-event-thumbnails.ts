import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  liveEventsPicturesRequestSchema,
  type LiveEventsPicturesRequest,
} from "../models/live-events-pictures-request.js";
import {
  meLiveEventsPicturesRequestSchema,
  type MeLiveEventsPicturesRequest,
} from "../models/me-live-events-pictures-request.js";
import { pictureConnectionSchema, type PictureConnection } from "../models/picture-connection.js";
import { pictureSchema, type Picture } from "../models/picture.js";
import {
  usersLiveEventsPicturesRequestSchema,
  type UsersLiveEventsPicturesRequest,
} from "../models/users-live-events-pictures-request.js";
import {
  usersLiveEventsPicturesThumbnailIdRequestSchema,
  type UsersLiveEventsPicturesThumbnailIdRequest,
} from "../models/users-live-events-pictures-thumbnail-id-request.js";
import type { Servers } from "../servers.js";

export class LiveEventThumbnails {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createLiveEventThumbnail(
    request: LiveEventThumbnails.CreateLiveEventThumbnailRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, LiveEventThumbnails.CreateLiveEventThumbnailError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/pictures"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usersLiveEventsPicturesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: LiveEventThumbnails.CreateLiveEventThumbnailError,
      },
      options,
    );
  }

  createLiveEventThumbnailAlt1(
    request: LiveEventThumbnails.CreateLiveEventThumbnailAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Picture, LiveEventThumbnails.CreateLiveEventThumbnailAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/live_events/{live_event_id}/pictures"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => liveEventsPicturesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: LiveEventThumbnails.CreateLiveEventThumbnailAlt1Error,
      },
      options,
    );
  }

  createLiveEventThumbnailAlt2(
    request: LiveEventThumbnails.CreateLiveEventThumbnailAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<Picture, LiveEventThumbnails.CreateLiveEventThumbnailAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/me/live_events/{live_event_id}/pictures"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => meLiveEventsPicturesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: LiveEventThumbnails.CreateLiveEventThumbnailAlt2Error,
      },
      options,
    );
  }

  deleteLiveEventThumbnail(
    request: LiveEventThumbnails.DeleteLiveEventThumbnailRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEventThumbnails.DeleteLiveEventThumbnailError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/pictures/{thumbnail_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.number() },
          { name: "thumbnail_id", value: request.thumbnailId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEventThumbnails.DeleteLiveEventThumbnailError,
      },
      options,
    );
  }

  deleteLiveEventThumbnailAlt1(
    request: LiveEventThumbnails.DeleteLiveEventThumbnailAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEventThumbnails.DeleteLiveEventThumbnailAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/live_events/{live_event_id}/pictures/{thumbnail_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.number() },
          { name: "thumbnail_id", value: request.thumbnailId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEventThumbnails.DeleteLiveEventThumbnailAlt1Error,
      },
      options,
    );
  }

  deleteLiveEventThumbnailAlt2(
    request: LiveEventThumbnails.DeleteLiveEventThumbnailAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEventThumbnails.DeleteLiveEventThumbnailAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/me/live_events/{live_event_id}/pictures/{thumbnail_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.number() },
          { name: "thumbnail_id", value: request.thumbnailId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEventThumbnails.DeleteLiveEventThumbnailAlt2Error,
      },
      options,
    );
  }

  editLiveEventThumbnail(
    request: LiveEventThumbnails.EditLiveEventThumbnailRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, LiveEventThumbnails.EditLiveEventThumbnailError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/pictures/{thumbnail_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.number() },
          { name: "thumbnail_id", value: request.thumbnailId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usersLiveEventsPicturesThumbnailIdRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: LiveEventThumbnails.EditLiveEventThumbnailError,
      },
      options,
    );
  }

  editLiveEventThumbnailAlt1(
    request: LiveEventThumbnails.EditLiveEventThumbnailAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Picture, LiveEventThumbnails.EditLiveEventThumbnailAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/live_events/{live_event_id}/pictures/{thumbnail_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.number() },
          { name: "thumbnail_id", value: request.thumbnailId, schema: s.number() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => liveEventsPicturesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: LiveEventThumbnails.EditLiveEventThumbnailAlt1Error,
      },
      options,
    );
  }

  editLiveEventThumbnailAlt2(
    request: LiveEventThumbnails.EditLiveEventThumbnailAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<Picture, LiveEventThumbnails.EditLiveEventThumbnailAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/me/live_events/{live_event_id}/pictures/{thumbnail_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.number() },
          { name: "thumbnail_id", value: request.thumbnailId, schema: s.number() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => meLiveEventsPicturesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: LiveEventThumbnails.EditLiveEventThumbnailAlt2Error,
      },
      options,
    );
  }

  getLiveEventThumbnail(
    request: LiveEventThumbnails.GetLiveEventThumbnailRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, LiveEventThumbnails.GetLiveEventThumbnailError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/pictures/{thumbnail_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.number() },
          { name: "thumbnail_id", value: request.thumbnailId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: LiveEventThumbnails.GetLiveEventThumbnailError,
      },
      options,
    );
  }

  getLiveEventThumbnailAlt1(
    request: LiveEventThumbnails.GetLiveEventThumbnailAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Picture, LiveEventThumbnails.GetLiveEventThumbnailAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/live_events/{live_event_id}/pictures/{thumbnail_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.number() },
          { name: "thumbnail_id", value: request.thumbnailId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: LiveEventThumbnails.GetLiveEventThumbnailAlt1Error,
      },
      options,
    );
  }

  getLiveEventThumbnailAlt2(
    request: LiveEventThumbnails.GetLiveEventThumbnailAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<Picture, LiveEventThumbnails.GetLiveEventThumbnailAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/live_events/{live_event_id}/pictures/{thumbnail_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.number() },
          { name: "thumbnail_id", value: request.thumbnailId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: LiveEventThumbnails.GetLiveEventThumbnailAlt2Error,
      },
      options,
    );
  }

  getLiveEventThumbnails(
    request: LiveEventThumbnails.GetLiveEventThumbnailsRequest,
    options?: RequestOptions,
  ): ApiPromise<PictureConnection, LiveEventThumbnails.GetLiveEventThumbnailsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/pictures"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.number() },
          { name: "user_id", value: request.userId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureConnectionSchema },
        errorFactory: LiveEventThumbnails.GetLiveEventThumbnailsError,
      },
      options,
    );
  }

  getLiveEventThumbnailsAlt1(
    request: LiveEventThumbnails.GetLiveEventThumbnailsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<PictureConnection, LiveEventThumbnails.GetLiveEventThumbnailsAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/live_events/{live_event_id}/pictures"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureConnectionSchema },
        errorFactory: LiveEventThumbnails.GetLiveEventThumbnailsAlt1Error,
      },
      options,
    );
  }

  getLiveEventThumbnailsAlt2(
    request: LiveEventThumbnails.GetLiveEventThumbnailsAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<PictureConnection, LiveEventThumbnails.GetLiveEventThumbnailsAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/me/live_events/{live_event_id}/pictures"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureConnectionSchema },
        errorFactory: LiveEventThumbnails.GetLiveEventThumbnailsAlt2Error,
      },
      options,
    );
  }
}

export namespace LiveEventThumbnails {
  export type CreateLiveEventThumbnailRequest = {
    liveEventId: number;
    userId: number;
    body?: UsersLiveEventsPicturesRequest;
  };

  export class CreateLiveEventThumbnailError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<CreateLiveEventThumbnailError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateLiveEventThumbnailAlt1Request = {
    liveEventId: number;
    body?: LiveEventsPicturesRequest;
  };

  export class CreateLiveEventThumbnailAlt1Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<CreateLiveEventThumbnailAlt1Error> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateLiveEventThumbnailAlt2Request = {
    liveEventId: number;
    body?: MeLiveEventsPicturesRequest;
  };

  export class CreateLiveEventThumbnailAlt2Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<CreateLiveEventThumbnailAlt2Error> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteLiveEventThumbnailRequest = {
    liveEventId: number;
    thumbnailId: number;
    userId: number;
  };

  export class DeleteLiveEventThumbnailError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<DeleteLiveEventThumbnailError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteLiveEventThumbnailAlt1Request = {
    liveEventId: number;
    thumbnailId: number;
  };

  export class DeleteLiveEventThumbnailAlt1Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<DeleteLiveEventThumbnailAlt1Error> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteLiveEventThumbnailAlt2Request = {
    liveEventId: number;
    thumbnailId: number;
  };

  export class DeleteLiveEventThumbnailAlt2Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<DeleteLiveEventThumbnailAlt2Error> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EditLiveEventThumbnailRequest = {
    liveEventId: number;
    thumbnailId: number;
    userId: number;
    body?: UsersLiveEventsPicturesThumbnailIdRequest;
  };

  export class EditLiveEventThumbnailError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<EditLiveEventThumbnailError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EditLiveEventThumbnailAlt1Request = {
    liveEventId: number;
    thumbnailId: number;
    body?: LiveEventsPicturesRequest;
  };

  export class EditLiveEventThumbnailAlt1Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<EditLiveEventThumbnailAlt1Error> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EditLiveEventThumbnailAlt2Request = {
    liveEventId: number;
    thumbnailId: number;
    body?: MeLiveEventsPicturesRequest;
  };

  export class EditLiveEventThumbnailAlt2Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<EditLiveEventThumbnailAlt2Error> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventThumbnailRequest = {
    liveEventId: number;
    thumbnailId: number;
    userId: number;
  };

  export class GetLiveEventThumbnailError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetLiveEventThumbnailError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventThumbnailAlt1Request = {
    liveEventId: number;
    thumbnailId: number;
  };

  export class GetLiveEventThumbnailAlt1Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetLiveEventThumbnailAlt1Error> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventThumbnailAlt2Request = {
    liveEventId: number;
    thumbnailId: number;
  };

  export class GetLiveEventThumbnailAlt2Error extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetLiveEventThumbnailAlt2Error> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventThumbnailsRequest = {
    liveEventId: number;
    userId: number;
  };

  export class GetLiveEventThumbnailsError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<GetLiveEventThumbnailsError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventThumbnailsAlt1Request = {
    liveEventId: number;
  };

  export class GetLiveEventThumbnailsAlt1Error extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<GetLiveEventThumbnailsAlt1Error> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventThumbnailsAlt2Request = {
    liveEventId: number;
  };

  export class GetLiveEventThumbnailsAlt2Error extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<GetLiveEventThumbnailsAlt2Error> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
