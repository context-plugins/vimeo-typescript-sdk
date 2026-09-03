import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  channelsVideosTexttracksRequestSchema,
  type ChannelsVideosTexttracksRequest,
} from "../models/channels-videos-texttracks-request.js";
import { errorSchema, type Error } from "../models/error.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { textTrackConnectionSchema, type TextTrackConnection } from "../models/text-track-connection.js";
import { textTrackSchema, type TextTrack } from "../models/text-track.js";
import {
  videosTexttracksRequestSchema,
  type VideosTexttracksRequest,
} from "../models/videos-texttracks-request.js";
import {
  videosTexttracksRequest1Schema,
  type VideosTexttracksRequest1,
} from "../models/videos-texttracks-request1.js";
import type { Servers } from "../servers.js";

export class VideosTextTracks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createTextTrack(
    request: VideosTextTracks.CreateTextTrackRequest,
    options?: RequestOptions,
  ): ApiPromise<TextTrack, VideosTextTracks.CreateTextTrackError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/videos/{video_id}/texttracks"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        body: { kind: "json", value: request.body, schema: videosTexttracksRequestSchema },
      },
      {
        success: { kind: "json", schema: textTrackSchema },
        errorFactory: VideosTextTracks.CreateTextTrackError,
      },
      options,
    );
  }

  createTextTrackAlt1(
    request: VideosTextTracks.CreateTextTrackAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<TextTrack, VideosTextTracks.CreateTextTrackAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/channels/{channel_id}/videos/{video_id}/texttracks"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "channel_id", value: request.channelId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "json", value: request.body, schema: channelsVideosTexttracksRequestSchema },
      },
      {
        success: { kind: "json", schema: textTrackSchema },
        errorFactory: VideosTextTracks.CreateTextTrackAlt1Error,
      },
      options,
    );
  }

  deleteTextTrack(
    request: VideosTextTracks.DeleteTextTrackRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosTextTracks.DeleteTextTrackError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/videos/{video_id}/texttracks/{texttrack_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "texttrack_id", value: request.texttrackId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosTextTracks.DeleteTextTrackError,
      },
      options,
    );
  }

  editTextTrack(
    request: VideosTextTracks.EditTextTrackRequest,
    options?: RequestOptions,
  ): ApiPromise<TextTrack, VideosTextTracks.EditTextTrackError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/videos/{video_id}/texttracks/{texttrack_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "texttrack_id", value: request.texttrackId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => videosTexttracksRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: textTrackSchema },
        errorFactory: VideosTextTracks.EditTextTrackError,
      },
      options,
    );
  }

  getTextTrack(
    request: VideosTextTracks.GetTextTrackRequest,
    options?: RequestOptions,
  ): ApiPromise<TextTrack, VideosTextTracks.GetTextTrackError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/texttracks/{texttrack_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "texttrack_id", value: request.texttrackId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: textTrackSchema },
        errorFactory: VideosTextTracks.GetTextTrackError,
      },
      options,
    );
  }

  getTextTracks(
    request: VideosTextTracks.GetTextTracksRequest,
    options?: RequestOptions,
  ): ApiPromise<TextTrackConnection, VideosTextTracks.GetTextTracksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/texttracks"),
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
        success: { kind: "json", schema: textTrackConnectionSchema },
        errorFactory: VideosTextTracks.GetTextTracksError,
      },
      options,
    );
  }

  getTextTracksAlt1(
    request: VideosTextTracks.GetTextTracksAlt1Request,
    options?: RequestOptions,
  ): ApiPromise<TextTrackConnection, VideosTextTracks.GetTextTracksAlt1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/versions/{version_id}/texttracks"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "video_id", value: request.videoId, schema: s.number() },
          { name: "version_id", value: request.versionId, schema: s.string() },
        ],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: textTrackConnectionSchema },
        errorFactory: VideosTextTracks.GetTextTracksAlt1Error,
      },
      options,
    );
  }

  getTextTracksAlt2(
    request: VideosTextTracks.GetTextTracksAlt2Request,
    options?: RequestOptions,
  ): ApiPromise<TextTrackConnection, VideosTextTracks.GetTextTracksAlt2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/channels/{channel_id}/videos/{video_id}/texttracks"),
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
        success: { kind: "json", schema: textTrackConnectionSchema },
        errorFactory: VideosTextTracks.GetTextTracksAlt2Error,
      },
      options,
    );
  }

  getTextTracksAlt3(
    request: VideosTextTracks.GetTextTracksAlt3Request,
    options?: RequestOptions,
  ): ApiPromise<TextTrackConnection, VideosTextTracks.GetTextTracksAlt3Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/albums/{album_id}/videos/{video_id}/texttracks"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "album_id", value: request.albumId, schema: s.number() },
          { name: "video_id", value: request.videoId, schema: s.number() },
        ],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: textTrackConnectionSchema },
        errorFactory: VideosTextTracks.GetTextTracksAlt3Error,
      },
      options,
    );
  }
}

export namespace VideosTextTracks {
  export type CreateTextTrackRequest = {
    videoId: number;
    body: VideosTexttracksRequest;
  };

  export class CreateTextTrackError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<CreateTextTrackError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type CreateTextTrackAlt1Request = {
    channelId: number;
    videoId: number;
    body: ChannelsVideosTexttracksRequest;
  };

  export class CreateTextTrackAlt1Error extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<CreateTextTrackAlt1Error> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type DeleteTextTrackRequest = {
    texttrackId: number;
    videoId: number;
  };

  export class DeleteTextTrackError extends ResponseError<
    Declared<"error", Error> | Declared<"legacyError", LegacyError>
  > {
    static readonly errors: ErrorDecoders<DeleteTextTrackError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type EditTextTrackRequest = {
    texttrackId: number;
    videoId: number;
    body?: VideosTexttracksRequest1;
  };

  export class EditTextTrackError extends ResponseError<
    Declared<"legacyError", LegacyError> | Declared<"legacyError2", LegacyError>
  > {
    static readonly errors: ErrorDecoders<EditTextTrackError> = [
      { on: 403, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 404, kind: "legacyError2", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetTextTrackRequest = {
    texttrackId: number;
    videoId: number;
  };

  export class GetTextTrackError extends ResponseError<
    Declared<"error", Error> | Declared<"legacyError", LegacyError>
  > {
    static readonly errors: ErrorDecoders<GetTextTrackError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetTextTracksRequest = {
    videoId: number;
    page?: number;
    perPage?: number;
  };

  export class GetTextTracksError extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetTextTracksError> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetTextTracksAlt1Request = {
    videoId: number;
    versionId: string;
    page?: number;
    perPage?: number;
  };

  export class GetTextTracksAlt1Error extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetTextTracksAlt1Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetTextTracksAlt2Request = {
    channelId: number;
    videoId: number;
    page?: number;
    perPage?: number;
  };

  export class GetTextTracksAlt2Error extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetTextTracksAlt2Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetTextTracksAlt3Request = {
    albumId: number;
    videoId: number;
    page?: number;
    perPage?: number;
  };

  export class GetTextTracksAlt3Error extends ResponseError<Declared<"legacyError", LegacyError>> {
    static readonly errors: ErrorDecoders<GetTextTracksAlt3Error> = [
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }
}
