import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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

/**
 * Use these methods to work with the thumbnail images of events.
 */
export class LiveEventThumbnails {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create an event thumbnail
   *
   * @remarks
   * This method creates a thumbnail image for the specified event.
   *
   * @returns The thumbnail was created.
   *
   * @throws {@link LiveEventThumbnails.CreateLiveEventThumbnailError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createLiveEventThumbnail(
    request: LiveEventThumbnails.CreateLiveEventThumbnailRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, LiveEventThumbnails.CreateLiveEventThumbnailError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/pictures"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Create an event thumbnail
   *
   * @remarks
   * This method creates a thumbnail image for the specified event.
   *
   * @returns The thumbnail was created.
   *
   * @throws {@link LiveEventThumbnails.CreateLiveEventThumbnailAlt1Error} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createLiveEventThumbnailAlt1(
    request: LiveEventThumbnails.CreateLiveEventThumbnailAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Picture, LiveEventThumbnails.CreateLiveEventThumbnailAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/live_events/{live_event_id}/pictures"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Create an event thumbnail
   *
   * @remarks
   * This method creates a thumbnail image for the specified event.
   *
   * @returns The thumbnail was created.
   *
   * @throws {@link LiveEventThumbnails.CreateLiveEventThumbnailAlt2Error} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createLiveEventThumbnailAlt2(
    request: LiveEventThumbnails.CreateLiveEventThumbnailAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<Picture, LiveEventThumbnails.CreateLiveEventThumbnailAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/me/live_events/{live_event_id}/pictures"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Delete an event thumbnail
   *
   * @remarks
   * This method deletes a thumbnail image for the specified event.
   *
   * @returns The thumbnail was deleted.
   *
   * @throws {@link LiveEventThumbnails.DeleteLiveEventThumbnailError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteLiveEventThumbnail(
    request: LiveEventThumbnails.DeleteLiveEventThumbnailRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEventThumbnails.DeleteLiveEventThumbnailError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/users/{user_id}/live_events/{live_event_id}/pictures/{thumbnail_id}",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.float64() },
          { name: "thumbnail_id", value: request.thumbnailId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEventThumbnails.DeleteLiveEventThumbnailError,
      },
      options,
    );
  }

  /**
   * Delete an event thumbnail
   *
   * @remarks
   * This method deletes a thumbnail image for the specified event.
   *
   * @returns The thumbnail was deleted.
   *
   * @throws {@link LiveEventThumbnails.DeleteLiveEventThumbnailAlt1Error} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteLiveEventThumbnailAlt1(
    request: LiveEventThumbnails.DeleteLiveEventThumbnailAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEventThumbnails.DeleteLiveEventThumbnailAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/live_events/{live_event_id}/pictures/{thumbnail_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.float64() },
          { name: "thumbnail_id", value: request.thumbnailId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEventThumbnails.DeleteLiveEventThumbnailAlt1Error,
      },
      options,
    );
  }

  /**
   * Delete an event thumbnail
   *
   * @remarks
   * This method deletes a thumbnail image for the specified event.
   *
   * @returns The thumbnail was deleted.
   *
   * @throws {@link LiveEventThumbnails.DeleteLiveEventThumbnailAlt2Error} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteLiveEventThumbnailAlt2(
    request: LiveEventThumbnails.DeleteLiveEventThumbnailAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiveEventThumbnails.DeleteLiveEventThumbnailAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/live_events/{live_event_id}/pictures/{thumbnail_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.float64() },
          { name: "thumbnail_id", value: request.thumbnailId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiveEventThumbnails.DeleteLiveEventThumbnailAlt2Error,
      },
      options,
    );
  }

  /**
   * Edit an event thumbnail
   *
   * @remarks
   * This method edits a thumbnail image for the specified event.
   *
   * @returns The thumbnail was edited.
   *
   * @throws {@link LiveEventThumbnails.EditLiveEventThumbnailError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editLiveEventThumbnail(
    request: LiveEventThumbnails.EditLiveEventThumbnailRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, LiveEventThumbnails.EditLiveEventThumbnailError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/users/{user_id}/live_events/{live_event_id}/pictures/{thumbnail_id}",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.float64() },
          { name: "thumbnail_id", value: request.thumbnailId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Edit an event thumbnail
   *
   * @remarks
   * This method edits a thumbnail image for the specified event.
   *
   * @returns The thumbnail was edited.
   *
   * @throws {@link LiveEventThumbnails.EditLiveEventThumbnailAlt1Error} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editLiveEventThumbnailAlt1(
    request: LiveEventThumbnails.EditLiveEventThumbnailAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Picture, LiveEventThumbnails.EditLiveEventThumbnailAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/live_events/{live_event_id}/pictures/{thumbnail_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.float64() },
          { name: "thumbnail_id", value: request.thumbnailId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Edit an event thumbnail
   *
   * @remarks
   * This method edits a thumbnail image for the specified event.
   *
   * @returns The thumbnail was edited.
   *
   * @throws {@link LiveEventThumbnails.EditLiveEventThumbnailAlt2Error} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editLiveEventThumbnailAlt2(
    request: LiveEventThumbnails.EditLiveEventThumbnailAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<Picture, LiveEventThumbnails.EditLiveEventThumbnailAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/me/live_events/{live_event_id}/pictures/{thumbnail_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.float64() },
          { name: "thumbnail_id", value: request.thumbnailId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Get a specific event thumbnail
   *
   * @remarks
   * This method returns a single thumbnail image of the specified event.
   *
   * @returns The thumbnail was returned.
   *
   * @throws {@link LiveEventThumbnails.GetLiveEventThumbnailError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLiveEventThumbnail(
    request: LiveEventThumbnails.GetLiveEventThumbnailRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, LiveEventThumbnails.GetLiveEventThumbnailError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/users/{user_id}/live_events/{live_event_id}/pictures/{thumbnail_id}",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.float64() },
          { name: "thumbnail_id", value: request.thumbnailId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: LiveEventThumbnails.GetLiveEventThumbnailError,
      },
      options,
    );
  }

  /**
   * Get a specific event thumbnail
   *
   * @remarks
   * This method returns a single thumbnail image of the specified event.
   *
   * @returns The thumbnail was returned.
   *
   * @throws {@link LiveEventThumbnails.GetLiveEventThumbnailAlt1Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLiveEventThumbnailAlt1(
    request: LiveEventThumbnails.GetLiveEventThumbnailAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<Picture, LiveEventThumbnails.GetLiveEventThumbnailAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/live_events/{live_event_id}/pictures/{thumbnail_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.float64() },
          { name: "thumbnail_id", value: request.thumbnailId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: LiveEventThumbnails.GetLiveEventThumbnailAlt1Error,
      },
      options,
    );
  }

  /**
   * Get a specific event thumbnail
   *
   * @remarks
   * This method returns a single thumbnail image of the specified event.
   *
   * @returns The thumbnail was returned.
   *
   * @throws {@link LiveEventThumbnails.GetLiveEventThumbnailAlt2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLiveEventThumbnailAlt2(
    request: LiveEventThumbnails.GetLiveEventThumbnailAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<Picture, LiveEventThumbnails.GetLiveEventThumbnailAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/live_events/{live_event_id}/pictures/{thumbnail_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.float64() },
          { name: "thumbnail_id", value: request.thumbnailId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: LiveEventThumbnails.GetLiveEventThumbnailAlt2Error,
      },
      options,
    );
  }

  /**
   * Get all the thumbnails of an event
   *
   * @remarks
   * This method returns every thumbnail image of the specified event.
   *
   * @returns The thumbnails were returned.
   *
   * @throws {@link LiveEventThumbnails.GetLiveEventThumbnailsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLiveEventThumbnails(
    request: LiveEventThumbnails.GetLiveEventThumbnailsRequest,
    options?: RequestOptions,
  ): ApiPromise<PictureConnection, LiveEventThumbnails.GetLiveEventThumbnailsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/live_events/{live_event_id}/pictures"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "live_event_id", value: request.liveEventId, schema: s.float64() },
          { name: "user_id", value: request.userId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureConnectionSchema },
        errorFactory: LiveEventThumbnails.GetLiveEventThumbnailsError,
      },
      options,
    );
  }

  /**
   * Get all the thumbnails of an event
   *
   * @remarks
   * This method returns every thumbnail image of the specified event.
   *
   * @returns The thumbnails were returned.
   *
   * @throws {@link LiveEventThumbnails.GetLiveEventThumbnailsAlt1Error} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLiveEventThumbnailsAlt1(
    request: LiveEventThumbnails.GetLiveEventThumbnailsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<PictureConnection, LiveEventThumbnails.GetLiveEventThumbnailsAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/live_events/{live_event_id}/pictures"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.float64() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureConnectionSchema },
        errorFactory: LiveEventThumbnails.GetLiveEventThumbnailsAlt1Error,
      },
      options,
    );
  }

  /**
   * Get all the thumbnails of an event
   *
   * @remarks
   * This method returns every thumbnail image of the specified event.
   *
   * @returns The thumbnails were returned.
   *
   * @throws {@link LiveEventThumbnails.GetLiveEventThumbnailsAlt2Error} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLiveEventThumbnailsAlt2(
    request: LiveEventThumbnails.GetLiveEventThumbnailsAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<PictureConnection, LiveEventThumbnails.GetLiveEventThumbnailsAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/live_events/{live_event_id}/pictures"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "live_event_id", value: request.liveEventId, schema: s.float64() }],
        query: [],
        headers: [],
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
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the user. */
    userId: number;
    body?: UsersLiveEventsPicturesRequest;
  };

  export class CreateLiveEventThumbnailError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<CreateLiveEventThumbnailError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateLiveEventThumbnailAlt1Request = {
    /** The ID of the event. */
    liveEventId: number;
    body?: LiveEventsPicturesRequest;
  };

  export class CreateLiveEventThumbnailAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<CreateLiveEventThumbnailAlt1Error> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateLiveEventThumbnailAlt2Request = {
    /** The ID of the event. */
    liveEventId: number;
    body?: MeLiveEventsPicturesRequest;
  };

  export class CreateLiveEventThumbnailAlt2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<CreateLiveEventThumbnailAlt2Error> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteLiveEventThumbnailRequest = {
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the thumbnail. */
    thumbnailId: number;
    /** The ID of the user. */
    userId: number;
  };

  export class DeleteLiveEventThumbnailError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<DeleteLiveEventThumbnailError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteLiveEventThumbnailAlt1Request = {
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the thumbnail. */
    thumbnailId: number;
  };

  export class DeleteLiveEventThumbnailAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<DeleteLiveEventThumbnailAlt1Error> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteLiveEventThumbnailAlt2Request = {
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the thumbnail. */
    thumbnailId: number;
  };

  export class DeleteLiveEventThumbnailAlt2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<DeleteLiveEventThumbnailAlt2Error> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EditLiveEventThumbnailRequest = {
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the thumbnail. */
    thumbnailId: number;
    /** The ID of the user. */
    userId: number;
    body?: UsersLiveEventsPicturesThumbnailIdRequest;
  };

  export class EditLiveEventThumbnailError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<EditLiveEventThumbnailError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EditLiveEventThumbnailAlt1Request = {
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the thumbnail. */
    thumbnailId: number;
    body?: LiveEventsPicturesRequest;
  };

  export class EditLiveEventThumbnailAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<EditLiveEventThumbnailAlt1Error> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EditLiveEventThumbnailAlt2Request = {
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the thumbnail. */
    thumbnailId: number;
    body?: MeLiveEventsPicturesRequest;
  };

  export class EditLiveEventThumbnailAlt2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<EditLiveEventThumbnailAlt2Error> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventThumbnailRequest = {
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the thumbnail. */
    thumbnailId: number;
    /** The ID of the user. */
    userId: number;
  };

  export class GetLiveEventThumbnailError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetLiveEventThumbnailError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventThumbnailAlt1Request = {
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the thumbnail. */
    thumbnailId: number;
  };

  export class GetLiveEventThumbnailAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetLiveEventThumbnailAlt1Error> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventThumbnailAlt2Request = {
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the thumbnail. */
    thumbnailId: number;
  };

  export class GetLiveEventThumbnailAlt2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"error2", Error>>;

    static readonly errors: ErrorDecoders<GetLiveEventThumbnailAlt2Error> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventThumbnailsRequest = {
    /** The ID of the event. */
    liveEventId: number;
    /** The ID of the user. */
    userId: number;
  };

  export class GetLiveEventThumbnailsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetLiveEventThumbnailsError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventThumbnailsAlt1Request = {
    /** The ID of the event. */
    liveEventId: number;
  };

  export class GetLiveEventThumbnailsAlt1Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetLiveEventThumbnailsAlt1Error> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLiveEventThumbnailsAlt2Request = {
    /** The ID of the event. */
    liveEventId: number;
  };

  export class GetLiveEventThumbnailsAlt2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetLiveEventThumbnailsAlt2Error> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
