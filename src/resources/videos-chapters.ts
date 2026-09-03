import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class VideosChapters {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createChapter(
    request: VideosChapters.CreateChapterRequest,
    options?: RequestOptions,
  ): ApiPromise<Chapter, VideosChapters.CreateChapterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/videos/{video_id}/chapters"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
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

  createChapterThumbnailOrUploadLink(
    request: VideosChapters.CreateChapterThumbnailOrUploadLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, VideosChapters.CreateChapterThumbnailOrUploadLinkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/videos/{video_id}/chapters/{chapter_id}/pictures"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "chapter_id", value: request.chapterId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
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

  createUnsavedChapterThumbnailOrUploadLink(
    request: VideosChapters.CreateUnsavedChapterThumbnailOrUploadLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, VideosChapters.CreateUnsavedChapterThumbnailOrUploadLinkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/videos/{video_id}/chapters/temporary/pictures"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
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

  deleteChapter(
    request: VideosChapters.DeleteChapterRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosChapters.DeleteChapterError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/videos/{video_id}/chapters/{chapter_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "chapter_id", value: request.chapterId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosChapters.DeleteChapterError,
      },
      options,
    );
  }

  deleteChapterThumbnail(
    request: VideosChapters.DeleteChapterThumbnailRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosChapters.DeleteChapterThumbnailError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/videos/{video_id}/chapters/{chapter_id}/pictures/{uid}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "chapter_id", value: request.chapterId, schema: s.number() },
          { name: "uid", value: request.uid, schema: s.string() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosChapters.DeleteChapterThumbnailError,
      },
      options,
    );
  }

  editChapter(
    request: VideosChapters.EditChapterRequest,
    options?: RequestOptions,
  ): ApiPromise<Chapter, VideosChapters.EditChapterError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/videos/{video_id}/chapters/{chapter_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "chapter_id", value: request.chapterId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
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

  getChapter(
    request: VideosChapters.GetChapterRequest,
    options?: RequestOptions,
  ): ApiPromise<Chapter, VideosChapters.GetChapterError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/chapters/{chapter_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "chapter_id", value: request.chapterId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: chapterSchema },
        errorFactory: VideosChapters.GetChapterError,
      },
      options,
    );
  }

  getChapterThumbnail(
    request: VideosChapters.GetChapterThumbnailRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, VideosChapters.GetChapterThumbnailError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/chapters/{chapter_id}/pictures/{uid}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "chapter_id", value: request.chapterId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
          { name: "uid", value: request.uid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: VideosChapters.GetChapterThumbnailError,
      },
      options,
    );
  }

  getChapterThumbnails(
    request: VideosChapters.GetChapterThumbnailsRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, VideosChapters.GetChapterThumbnailsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/chapters/{chapter_id}/pictures"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "chapter_id", value: request.chapterId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: VideosChapters.GetChapterThumbnailsError,
      },
      options,
    );
  }

  getChapters(
    request: VideosChapters.GetChaptersRequest,
    options?: RequestOptions,
  ): ApiPromise<ChapterConnection, VideosChapters.GetChaptersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/chapters"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: chapterConnectionSchema },
        errorFactory: VideosChapters.GetChaptersError,
      },
      options,
    );
  }

  getUnsavedChapterThumbnail(
    request: VideosChapters.GetUnsavedChapterThumbnailRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, VideosChapters.GetUnsavedChapterThumbnailError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/chapters/temporary/pictures/{uid}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "video_id", value: request.videoId, schema: s.number() },
          { name: "uid", value: request.uid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: VideosChapters.GetUnsavedChapterThumbnailError,
      },
      options,
    );
  }

  setChapterThumbnailActive(
    request: VideosChapters.SetChapterThumbnailActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, VideosChapters.SetChapterThumbnailActiveError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/videos/{video_id}/chapters/{chapter_id}/pictures/{uid}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "chapter_id", value: request.chapterId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
          { name: "uid", value: request.uid, schema: s.string() },
        ],
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
    videoId: number;
    body?: VideosChaptersRequest;
  };

  export class CreateChapterError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<CreateChapterError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CreateChapterThumbnailOrUploadLinkRequest = {
    chapterId: number;
    videoId: number;
    body?: VideosChaptersPicturesRequest;
  };

  export class CreateChapterThumbnailOrUploadLinkError extends ResponseError<
    Declared<"legacyError", LegacyError>
  > {
    static readonly errors: ErrorDecoders<CreateChapterThumbnailOrUploadLinkError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CreateUnsavedChapterThumbnailOrUploadLinkRequest = {
    videoId: number;
    body?: VideosChaptersTemporaryPicturesRequest;
  };

  export class CreateUnsavedChapterThumbnailOrUploadLinkError extends ResponseError<
    Declared<"legacyError", LegacyError>
  > {
    static readonly errors: ErrorDecoders<CreateUnsavedChapterThumbnailOrUploadLinkError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteChapterRequest = {
    chapterId: number;
    videoId: number;
  };

  export class DeleteChapterError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<DeleteChapterError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteChapterThumbnailRequest = {
    chapterId: number;
    uid: string;
    videoId: number;
  };

  export class DeleteChapterThumbnailError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<DeleteChapterThumbnailError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type EditChapterRequest = {
    chapterId: number;
    videoId: number;
    body?: VideosChaptersRequest1;
  };

  export class EditChapterError extends ResponseError<
    Declared<"error", Error> | Declared<"legacyError", LegacyError>
  > {
    static readonly errors: ErrorDecoders<EditChapterError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetChapterRequest = {
    chapterId: number;
    videoId: number;
  };

  export class GetChapterError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetChapterError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetChapterThumbnailRequest = {
    chapterId: number;
    videoId: number;
    uid: string;
  };

  export class GetChapterThumbnailError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetChapterThumbnailError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetChapterThumbnailsRequest = {
    chapterId: number;
    videoId: number;
  };

  export class GetChapterThumbnailsError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetChapterThumbnailsError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetChaptersRequest = {
    videoId: number;
    page?: number;
    perPage?: number;
  };

  export class GetChaptersError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetChaptersError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetUnsavedChapterThumbnailRequest = {
    videoId: number;
    uid: string;
  };

  export class GetUnsavedChapterThumbnailError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetUnsavedChapterThumbnailError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type SetChapterThumbnailActiveRequest = {
    chapterId: number;
    videoId: number;
    uid: string;
    body?: VideosChaptersPicturesUidRequest;
  };

  export class SetChapterThumbnailActiveError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<SetChapterThumbnailActiveError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
