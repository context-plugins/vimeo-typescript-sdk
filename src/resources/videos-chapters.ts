import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { chapterConnectionSchema, type ChapterConnection } from "../models/chapter-connection.js";
import { chapterSchema, type Chapter } from "../models/chapter.js";
import { errorSchema, type Error } from "../models/error.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { pictureSchema, type Picture } from "../models/picture.js";
import {
  videosChaptersPicturesRequestSchema,
  type VideosChaptersPicturesRequest,
} from "../models/videos-chapters-pictures-request.js";
import {
  videosChaptersPicturesUidRequestSchema,
  type VideosChaptersPicturesUidRequest,
} from "../models/videos-chapters-pictures-uid-request.js";
import {
  videosChaptersRequestSchema,
  type VideosChaptersRequest,
} from "../models/videos-chapters-request.js";
import {
  videosChaptersRequest1Schema,
  type VideosChaptersRequest1,
} from "../models/videos-chapters-request1.js";
import {
  videosChaptersTemporaryPicturesRequestSchema,
  type VideosChaptersTemporaryPicturesRequest,
} from "../models/videos-chapters-temporary-pictures-request.js";
import type { Servers } from "../servers.js";

/**
 * Use these methods to work with video chapters.
 */
export class VideosChapters {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a chapter to a video
   *
   * @remarks
   * This method adds a chapter to the specified video.
   *
   * @returns The chapter was added.
   *
   * @throws {@link VideosChapters.CreateChapterError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createChapter(
    request: VideosChapters.CreateChapterRequest,
    options?: RequestOptions,
  ): ApiPromise<Chapter, VideosChapters.CreateChapterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/videos/{video_id}/chapters"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => videosChaptersRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: chapterSchema },
        errorFactory: VideosChapters.CreateChapterError,
      },
      options,
    );
  }

  /**
   * Generate an upload link or timecode-based thumbnail for a saved video chapter
   *
   * @remarks
   * This method generates either an upload link or a timecode-based thumbnail for the specified
   * saved video chapter. To generate the upload link, which enables the authenticated user to
   * upload a chapter thumbnail image manually, leave the body of the request empty. To generate an
   * automatic timecode-based thumbnail, include the **timecode** parameter in the body of the
   * request.
   *
   * @returns The chapter thumbnail or upload link was generated.
   *
   * @throws {@link VideosChapters.CreateChapterThumbnailOrUploadLinkError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createChapterThumbnailOrUploadLink(
    request: VideosChapters.CreateChapterThumbnailOrUploadLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, VideosChapters.CreateChapterThumbnailOrUploadLinkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/videos/{video_id}/chapters/{chapter_id}/pictures"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "chapter_id", value: request.chapterId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => videosChaptersPicturesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: VideosChapters.CreateChapterThumbnailOrUploadLinkError,
      },
      options,
    );
  }

  /**
   * Generate an upload link or timecode-based thumbnail for an unsaved video chapter
   *
   * @remarks
   * This method generates either an upload link or a timecode-based thumbnail for an unsaved video
   * chapter. To generate the upload link, which enables the authenticated user to upload a chapter
   * thumbnail image manually, leave the body of the request empty. To generate an automatic
   * timecode-based thumbnail, specify the **timecode** parameter in the body of the request.
   *
   * @returns The upload link or chapter thumbnail was generated.
   *
   * @throws {@link VideosChapters.CreateUnsavedChapterThumbnailOrUploadLinkError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createUnsavedChapterThumbnailOrUploadLink(
    request: VideosChapters.CreateUnsavedChapterThumbnailOrUploadLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, VideosChapters.CreateUnsavedChapterThumbnailOrUploadLinkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/videos/{video_id}/chapters/temporary/pictures"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => videosChaptersTemporaryPicturesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: VideosChapters.CreateUnsavedChapterThumbnailOrUploadLinkError,
      },
      options,
    );
  }

  /**
   * Delete a chapter
   *
   * @remarks
   * This method deletes the specified chapter from a video. The authenticated user must be the
   * owner of the video.
   *
   * @returns The chapter was deleted.
   *
   * @throws {@link VideosChapters.DeleteChapterError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteChapter(
    request: VideosChapters.DeleteChapterRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosChapters.DeleteChapterError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/videos/{video_id}/chapters/{chapter_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "chapter_id", value: request.chapterId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosChapters.DeleteChapterError,
      },
      options,
    );
  }

  /**
   * Delete a chapter thumbnail
   *
   * @remarks
   * This method deletes the specified chapter thumbnail from a video.
   *
   * The authenticated user must be the owner of the video that the chapter belongs to. This method
   * deletes both timecode-generated and custom-uploaded thumbnails.
   *
   * @returns The chapter thumbnail was deleted.
   *
   * @throws {@link VideosChapters.DeleteChapterThumbnailError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteChapterThumbnail(
    request: VideosChapters.DeleteChapterThumbnailRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosChapters.DeleteChapterThumbnailError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/videos/{video_id}/chapters/{chapter_id}/pictures/{uid}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "chapter_id", value: request.chapterId, schema: s.float64() },
          { name: "uid", value: request.uid, schema: s.string() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosChapters.DeleteChapterThumbnailError,
      },
      options,
    );
  }

  /**
   * Edit a chapter
   *
   * @remarks
   * This method edits the specified chapter of a video. The authenticated user must be the owner of
   * the video.
   *
   * @returns The chapter was edited.
   *
   * @throws {@link VideosChapters.EditChapterError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editChapter(
    request: VideosChapters.EditChapterRequest,
    options?: RequestOptions,
  ): ApiPromise<Chapter, VideosChapters.EditChapterError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/videos/{video_id}/chapters/{chapter_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "chapter_id", value: request.chapterId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => videosChaptersRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: chapterSchema },
        errorFactory: VideosChapters.EditChapterError,
      },
      options,
    );
  }

  /**
   * Get a specific chapter
   *
   * @remarks
   * This method returns a single chapter of the specified video.
   *
   * @returns The chapter was returned.
   *
   * @throws {@link VideosChapters.GetChapterError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getChapter(
    request: VideosChapters.GetChapterRequest,
    options?: RequestOptions,
  ): ApiPromise<Chapter, VideosChapters.GetChapterError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/chapters/{chapter_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "chapter_id", value: request.chapterId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: chapterSchema },
        errorFactory: VideosChapters.GetChapterError,
      },
      options,
    );
  }

  /**
   * Get a single chapter thumbnail associated with a saved video chapter
   *
   * @remarks
   * This method returns the specified thumbnail associated with a saved video chapter.
   *
   * @returns The chapter thumbnail was returned.
   *
   * @throws {@link VideosChapters.GetChapterThumbnailError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getChapterThumbnail(
    request: VideosChapters.GetChapterThumbnailRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, VideosChapters.GetChapterThumbnailError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/chapters/{chapter_id}/pictures/{uid}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "chapter_id", value: request.chapterId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
          { name: "uid", value: request.uid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: VideosChapters.GetChapterThumbnailError,
      },
      options,
    );
  }

  /**
   * Get all the thumbnails associated with a saved video chapter
   *
   * @remarks
   * This method returns every thumbnail associated with the specified saved video chapter.
   *
   * @returns The chapter thumbnails were returned.
   *
   * @throws {@link VideosChapters.GetChapterThumbnailsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getChapterThumbnails(
    request: VideosChapters.GetChapterThumbnailsRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, VideosChapters.GetChapterThumbnailsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/chapters/{chapter_id}/pictures"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "chapter_id", value: request.chapterId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: VideosChapters.GetChapterThumbnailsError,
      },
      options,
    );
  }

  /**
   * Get all the chapters of a video
   *
   * @remarks
   * This method returns every chapter of the specified video.
   *
   * @returns The chapters were returned.
   *
   * @throws {@link VideosChapters.GetChaptersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getChapters(
    request: VideosChapters.GetChaptersRequest,
    options?: RequestOptions,
  ): ApiPromise<ChapterConnection, VideosChapters.GetChaptersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/chapters"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.float64() }],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: chapterConnectionSchema },
        errorFactory: VideosChapters.GetChaptersError,
      },
      options,
    );
  }

  /**
   * Get a single chapter thumbnail associated with an unsaved video chapter
   *
   * @remarks
   * This method returns the specified thumbnail associated with an unsaved video chapter.
   *
   * @returns The chapter thumbnail was returned.
   *
   * @throws {@link VideosChapters.GetUnsavedChapterThumbnailError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUnsavedChapterThumbnail(
    request: VideosChapters.GetUnsavedChapterThumbnailRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, VideosChapters.GetUnsavedChapterThumbnailError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/chapters/temporary/pictures/{uid}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "video_id", value: request.videoId, schema: s.float64() },
          { name: "uid", value: request.uid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: VideosChapters.GetUnsavedChapterThumbnailError,
      },
      options,
    );
  }

  /**
   * Set a chapter thumbnail as active
   *
   * @remarks
   * This method sets the specified chapter thumbnail for a video as active.
   *
   * @returns The chapter thumbnail was set as active.
   *
   * @throws {@link VideosChapters.SetChapterThumbnailActiveError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setChapterThumbnailActive(
    request: VideosChapters.SetChapterThumbnailActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, VideosChapters.SetChapterThumbnailActiveError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/videos/{video_id}/chapters/{chapter_id}/pictures/{uid}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "chapter_id", value: request.chapterId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
          { name: "uid", value: request.uid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => videosChaptersPicturesUidRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: VideosChapters.SetChapterThumbnailActiveError,
      },
      options,
    );
  }
}

export namespace VideosChapters {
  export type CreateChapterRequest = {
    /** The ID of the video. */
    videoId: number;
    body?: VideosChaptersRequest;
  };

  export class CreateChapterError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<CreateChapterError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CreateChapterThumbnailOrUploadLinkRequest = {
    /** The ID of the chapter. */
    chapterId: number;
    /** The ID of the video. */
    videoId: number;
    body?: VideosChaptersPicturesRequest;
  };

  export class CreateChapterThumbnailOrUploadLinkError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<CreateChapterThumbnailOrUploadLinkError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CreateUnsavedChapterThumbnailOrUploadLinkRequest = {
    /** The ID of the video. */
    videoId: number;
    body?: VideosChaptersTemporaryPicturesRequest;
  };

  export class CreateUnsavedChapterThumbnailOrUploadLinkError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<CreateUnsavedChapterThumbnailOrUploadLinkError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteChapterRequest = {
    /** The ID of the chapter. */
    chapterId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class DeleteChapterError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<DeleteChapterError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteChapterThumbnailRequest = {
    /** The ID of the chapter. */
    chapterId: number;
    /** The unique ID of the thumbnail. */
    uid: string;
    /** The ID of the video. */
    videoId: number;
  };

  export class DeleteChapterThumbnailError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<DeleteChapterThumbnailError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type EditChapterRequest = {
    /** The ID of the chapter. */
    chapterId: number;
    /** The ID of the video. */
    videoId: number;
    body?: VideosChaptersRequest1;
  };

  export class EditChapterError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<EditChapterError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetChapterRequest = {
    /** The ID of the chapter. */
    chapterId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class GetChapterError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetChapterError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetChapterThumbnailRequest = {
    /** The ID of the chapter. */
    chapterId: number;
    /** The ID of the video. */
    videoId: number;
    uid: string;
  };

  export class GetChapterThumbnailError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetChapterThumbnailError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetChapterThumbnailsRequest = {
    /** The ID of the chapter. */
    chapterId: number;
    /** The ID of the video. */
    videoId: number;
  };

  export class GetChapterThumbnailsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetChapterThumbnailsError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetChaptersRequest = {
    /** The ID of the video. */
    videoId: number;
    /** The page number of the results to show. */
    page?: number;
    /** The number of items to show on each page of results, up to a maximum of 100. */
    perPage?: number;
  };

  export class GetChaptersError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetChaptersError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetUnsavedChapterThumbnailRequest = {
    /** The ID of the video. */
    videoId: number;
    uid: string;
  };

  export class GetUnsavedChapterThumbnailError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetUnsavedChapterThumbnailError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type SetChapterThumbnailActiveRequest = {
    /** The ID of the chapter. */
    chapterId: number;
    /** The ID of the video. */
    videoId: number;
    uid: string;
    body?: VideosChaptersPicturesUidRequest;
  };

  export class SetChapterThumbnailActiveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<SetChapterThumbnailActiveError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
