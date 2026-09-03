import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  alternateAudioTrackConnectionSchema,
  type AlternateAudioTrackConnection,
} from "../models/alternate-audio-track-connection.js";
import { alternateAudioTrackSchema, type AlternateAudioTrack } from "../models/alternate-audio-track.js";
import { errorSchema, type Error } from "../models/error.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { pictureSchema, type Picture } from "../models/picture.js";
import {
  videoVersionConnectionSchema,
  type VideoVersionConnection,
} from "../models/video-version-connection.js";
import { videoVersionSchema, type VideoVersion } from "../models/video-version.js";
import {
  videosVersionsAudiotracksAudiotrackIdRequestSchema,
  type VideosVersionsAudiotracksAudiotrackIdRequest,
} from "../models/videos-versions-audiotracks-audiotrack-id-request.js";
import {
  videosVersionsAudiotracksRequestSchema,
  type VideosVersionsAudiotracksRequest,
} from "../models/videos-versions-audiotracks-request.js";
import {
  videosVersionsRequestSchema,
  type VideosVersionsRequest,
} from "../models/videos-versions-request.js";
import {
  videosVersionsRequest1Schema,
  type VideosVersionsRequest1,
} from "../models/videos-versions-request1.js";
import type { Servers } from "../servers.js";

export class VideosVersions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createAudioTrack(
    request: VideosVersions.CreateAudioTrackRequest,
    options?: RequestOptions,
  ): ApiPromise<AlternateAudioTrack, VideosVersions.CreateAudioTrackError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/videos/{video_id}/versions/{version_id}/audiotracks"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "version_id", value: request.versionId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "json", value: request.body, schema: videosVersionsAudiotracksRequestSchema },
      },
      {
        success: { kind: "json", schema: alternateAudioTrackSchema },
        errorFactory: VideosVersions.CreateAudioTrackError,
      },
      options,
    );
  }

  createVideoVersion(
    request: VideosVersions.CreateVideoVersionRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoVersion, VideosVersions.CreateVideoVersionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/videos/{video_id}/versions"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: videosVersionsRequestSchema },
      },
      {
        success: { kind: "json", schema: videoVersionSchema },
        errorFactory: VideosVersions.CreateVideoVersionError,
      },
      options,
    );
  }

  deleteAudioTrack(
    request: VideosVersions.DeleteAudioTrackRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosVersions.DeleteAudioTrackError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/videos/{video_id}/versions/{version_id}/audiotracks/{audiotrack_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "audiotrack_id", value: request.audiotrackId, schema: s.string() },
          { name: "version_id", value: request.versionId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosVersions.DeleteAudioTrackError,
      },
      options,
    );
  }

  deleteVideoVersion(
    request: VideosVersions.DeleteVideoVersionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosVersions.DeleteVideoVersionError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/videos/{video_id}/versions/{version_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "version_id", value: request.versionId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosVersions.DeleteVideoVersionError,
      },
      options,
    );
  }

  editAudioTrack(
    request: VideosVersions.EditAudioTrackRequest,
    options?: RequestOptions,
  ): ApiPromise<AlternateAudioTrack, VideosVersions.EditAudioTrackError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/videos/{video_id}/versions/{version_id}/audiotracks/{audiotrack_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "audiotrack_id", value: request.audiotrackId, schema: s.string() },
          { name: "version_id", value: request.versionId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => videosVersionsAudiotracksAudiotrackIdRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: alternateAudioTrackSchema },
        errorFactory: VideosVersions.EditAudioTrackError,
      },
      options,
    );
  }

  editVideoVersion(
    request: VideosVersions.EditVideoVersionRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoVersion, VideosVersions.EditVideoVersionError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/videos/{video_id}/versions/{version_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "version_id", value: request.versionId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => videosVersionsRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: videoVersionSchema },
        errorFactory: VideosVersions.EditVideoVersionError,
      },
      options,
    );
  }

  getAudioTrack(
    request: VideosVersions.GetAudioTrackRequest,
    options?: RequestOptions,
  ): ApiPromise<AlternateAudioTrack, VideosVersions.GetAudioTrackError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/versions/{version_id}/audiotracks/{audiotrack_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "audiotrack_id", value: request.audiotrackId, schema: s.string() },
          { name: "version_id", value: request.versionId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: alternateAudioTrackSchema },
        errorFactory: VideosVersions.GetAudioTrackError,
      },
      options,
    );
  }

  getAudioTracks(
    request: VideosVersions.GetAudioTracksRequest,
    options?: RequestOptions,
  ): ApiPromise<AlternateAudioTrackConnection, VideosVersions.GetAudioTracksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/versions/{version_id}/audiotracks"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "version_id", value: request.versionId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: alternateAudioTrackConnectionSchema },
        errorFactory: VideosVersions.GetAudioTracksError,
      },
      options,
    );
  }

  getAudiotrackDownloads(
    request: VideosVersions.GetAudiotrackDownloadsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/versions/{version_id}/downloads"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "version_id", value: request.versionId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
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

  getVersionThumbnail(
    request: VideosVersions.GetVersionThumbnailRequest,
    options?: RequestOptions,
  ): ApiPromise<Picture, ResponseError> {
    return this.#rawClient.execute<Picture, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/versions/{version_id}/picture"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "version_id", value: request.versionId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pictureSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getVideoVersion(
    request: VideosVersions.GetVideoVersionRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoVersion, VideosVersions.GetVideoVersionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/versions/{version_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "version_id", value: request.versionId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoVersionSchema },
        errorFactory: VideosVersions.GetVideoVersionError,
      },
      options,
    );
  }

  getVideoVersions(
    request: VideosVersions.GetVideoVersionsRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoVersionConnection, VideosVersions.GetVideoVersionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/versions"),
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
        success: { kind: "json", schema: videoVersionConnectionSchema },
        errorFactory: VideosVersions.GetVideoVersionsError,
      },
      options,
    );
  }

  getVideoVersionsAlt1(
    request: VideosVersions.GetVideoVersionsAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<VideoVersionConnection, VideosVersions.GetVideoVersionsAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/channels/{channel_id}/videos/{video_id}/versions"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "channel_id", value: request.channelId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoVersionConnectionSchema },
        errorFactory: VideosVersions.GetVideoVersionsAlt1Error,
      },
      options,
    );
  }
}

export namespace VideosVersions {
  export type CreateAudioTrackRequest = {
    versionId: number;
    videoId: number;
    body: VideosVersionsAudiotracksRequest;
  };

  export class CreateAudioTrackError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<CreateAudioTrackError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CreateVideoVersionRequest = {
    videoId: number;
    body: VideosVersionsRequest;
  };

  export class CreateVideoVersionError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<CreateVideoVersionError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteAudioTrackRequest = {
    audiotrackId: string;
    versionId: number;
    videoId: number;
  };

  export class DeleteAudioTrackError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<DeleteAudioTrackError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteVideoVersionRequest = {
    versionId: number;
    videoId: number;
  };

  export class DeleteVideoVersionError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<DeleteVideoVersionError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type EditAudioTrackRequest = {
    audiotrackId: string;
    versionId: number;
    videoId: number;
    body?: VideosVersionsAudiotracksAudiotrackIdRequest;
  };

  export class EditAudioTrackError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<EditAudioTrackError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type EditVideoVersionRequest = {
    versionId: number;
    videoId: number;
    body?: VideosVersionsRequest1;
  };

  export class EditVideoVersionError extends ResponseError<
    Declared<"error", Error> | Declared<"legacyError", LegacyError>
  > {
    static readonly errors: ErrorDecoders<EditVideoVersionError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetAudioTrackRequest = {
    audiotrackId: string;
    versionId: number;
    videoId: number;
  };

  export class GetAudioTrackError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetAudioTrackError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetAudioTracksRequest = {
    versionId: number;
    videoId: number;
  };

  export class GetAudioTracksError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetAudioTracksError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetAudiotrackDownloadsRequest = {
    versionId: number;
    videoId: number;
  };

  export type GetVersionThumbnailRequest = {
    versionId: number;
    videoId: number;
  };

  export type GetVideoVersionRequest = {
    versionId: number;
    videoId: number;
  };

  export class GetVideoVersionError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetVideoVersionError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVideoVersionsRequest = {
    videoId: number;
    page?: number;
    perPage?: number;
  };

  export class GetVideoVersionsError extends ResponseError<
    Declared<"error", Error> | Declared<"legacyError", LegacyError>
  > {
    static readonly errors: ErrorDecoders<GetVideoVersionsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetVideoVersionsAlt1Request = {
    channelId: number;
    videoId: number;
    page?: number;
    perPage?: number;
  };

  export class GetVideoVersionsAlt1Error extends ResponseError<
    Declared<"error", Error> | Declared<"legacyError", LegacyError>
  > {
    static readonly errors: ErrorDecoders<GetVideoVersionsAlt1Error> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
