import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { legacyErrorSchema, type LegacyError } from "../models/legacy-error.js";
import { type52Schema, type Type52 } from "../models/type52.js";
import { videosAiAskRequestSchema, type VideosAiAskRequest } from "../models/videos-ai-ask-request.js";
import {
  videosAiTexttracksRequestSchema,
  type VideosAiTexttracksRequest,
} from "../models/videos-ai-texttracks-request.js";
import {
  videosAiTranscribeRequestSchema,
  type VideosAiTranscribeRequest,
} from "../models/videos-ai-transcribe-request.js";
import {
  videosAiTranslateDubbingRequestSchema,
  type VideosAiTranslateDubbingRequest,
} from "../models/videos-ai-translate-dubbing-request.js";
import {
  videosAiTranslateSubtitlesRequestSchema,
  type VideosAiTranslateSubtitlesRequest,
} from "../models/videos-ai-translate-subtitles-request.js";
import type { Servers } from "../servers.js";

export class VideosAi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  askAiQuestion(
    request: VideosAi.AskAiQuestionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosAi.AskAiQuestionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/videos/{video_id}/ai/ask"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => videosAiAskRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosAi.AskAiQuestionError,
      },
      options,
    );
  }

  editAiTexttrack(
    request: VideosAi.EditAiTexttrackRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosAi.EditAiTexttrackError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/videos/{video_id}/ai/texttracks/{texttrack_id}"),
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
          schema: s.optional(s.lazy(() => videosAiTexttracksRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosAi.EditAiTexttrackError,
      },
      options,
    );
  }

  getAiLanguages(
    request: VideosAi.GetAiLanguagesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosAi.GetAiLanguagesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/ai/languages"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        query: [{ name: "type", value: request.type, schema: s.optional(s.lazy(() => type52Schema)) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosAi.GetAiLanguagesError,
      },
      options,
    );
  }

  getAiMetadata(
    request: VideosAi.GetAiMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosAi.GetAiMetadataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/ai/metadata"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosAi.GetAiMetadataError,
      },
      options,
    );
  }

  getAiQuestions(
    request: VideosAi.GetAiQuestionsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosAi.GetAiQuestionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/ai/ask"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        query: [{ name: "language", value: request.language, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosAi.GetAiQuestionsError,
      },
      options,
    );
  }

  getAiTranscribeStatus(
    request: VideosAi.GetAiTranscribeStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosAi.GetAiTranscribeStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/ai/transcribe"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosAi.GetAiTranscribeStatusError,
      },
      options,
    );
  }

  getAiTranslateDubbingStatus(
    request: VideosAi.GetAiTranslateDubbingStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosAi.GetAiTranslateDubbingStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/ai/translate/dubbing"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        query: [{ name: "language", value: request.language, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosAi.GetAiTranslateDubbingStatusError,
      },
      options,
    );
  }

  getAiTranslateSubtitlesStatus(
    request: VideosAi.GetAiTranslateSubtitlesStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosAi.GetAiTranslateSubtitlesStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/ai/translate/subtitles"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        query: [{ name: "language", value: request.language, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosAi.GetAiTranslateSubtitlesStatusError,
      },
      options,
    );
  }

  startAiTranscribe(
    request: VideosAi.StartAiTranscribeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosAi.StartAiTranscribeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/videos/{video_id}/ai/transcribe"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => videosAiTranscribeRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosAi.StartAiTranscribeError,
      },
      options,
    );
  }

  startAiTranslateDubbing(
    request: VideosAi.StartAiTranslateDubbingRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosAi.StartAiTranslateDubbingError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/videos/{video_id}/ai/translate/dubbing"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => videosAiTranslateDubbingRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosAi.StartAiTranslateDubbingError,
      },
      options,
    );
  }

  startAiTranslateSubtitles(
    request: VideosAi.StartAiTranslateSubtitlesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosAi.StartAiTranslateSubtitlesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/videos/{video_id}/ai/translate/subtitles"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => videosAiTranslateSubtitlesRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosAi.StartAiTranslateSubtitlesError,
      },
      options,
    );
  }
}

export namespace VideosAi {
  export type AskAiQuestionRequest = {
    videoId: number;
    body?: VideosAiAskRequest;
  };

  export class AskAiQuestionError extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"legacyError", LegacyError>
    | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<AskAiQuestionError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 503, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EditAiTexttrackRequest = {
    texttrackId: number;
    videoId: number;
    body?: VideosAiTexttracksRequest;
  };

  export class EditAiTexttrackError extends ResponseError<
    Declared<"error", Error> | Declared<"legacyError", LegacyError> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<EditAiTexttrackError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 503, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAiLanguagesRequest = {
    type?: Type52;
  };

  export class GetAiLanguagesError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<GetAiLanguagesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAiMetadataRequest = {
    videoId: number;
  };

  export class GetAiMetadataError extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"legacyError", LegacyError>
    | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<GetAiMetadataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 503, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAiQuestionsRequest = {
    videoId: number;
    language?: string;
  };

  export class GetAiQuestionsError extends ResponseError<
    Declared<"error", Error> | Declared<"legacyError", LegacyError> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetAiQuestionsError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 503, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAiTranscribeStatusRequest = {
    videoId: number;
  };

  export class GetAiTranscribeStatusError extends ResponseError<
    Declared<"error", Error> | Declared<"legacyError", LegacyError>
  > {
    static readonly errors: ErrorDecoders<GetAiTranscribeStatusError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetAiTranslateDubbingStatusRequest = {
    videoId: number;
    language?: string;
  };

  export class GetAiTranslateDubbingStatusError extends ResponseError<
    Declared<"error", Error> | Declared<"legacyError", LegacyError> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetAiTranslateDubbingStatusError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 503, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAiTranslateSubtitlesStatusRequest = {
    videoId: number;
    language?: string;
  };

  export class GetAiTranslateSubtitlesStatusError extends ResponseError<
    Declared<"error", Error> | Declared<"legacyError", LegacyError> | Declared<"error2", Error>
  > {
    static readonly errors: ErrorDecoders<GetAiTranslateSubtitlesStatusError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 503, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type StartAiTranscribeRequest = {
    videoId: number;
    body?: VideosAiTranscribeRequest;
  };

  export class StartAiTranscribeError extends ResponseError<
    Declared<"error", Error> | Declared<"error2", Error> | Declared<"legacyError", LegacyError>
  > {
    static readonly errors: ErrorDecoders<StartAiTranscribeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type StartAiTranslateDubbingRequest = {
    videoId: number;
    body?: VideosAiTranslateDubbingRequest;
  };

  export class StartAiTranslateDubbingError extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"legacyError", LegacyError>
    | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<StartAiTranslateDubbingError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 503, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type StartAiTranslateSubtitlesRequest = {
    videoId: number;
    body?: VideosAiTranslateSubtitlesRequest;
  };

  export class StartAiTranslateSubtitlesError extends ResponseError<
    | Declared<"error", Error>
    | Declared<"error2", Error>
    | Declared<"legacyError", LegacyError>
    | Declared<"error3", Error>
  > {
    static readonly errors: ErrorDecoders<StartAiTranslateSubtitlesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 503, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
