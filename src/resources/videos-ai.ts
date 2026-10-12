import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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

/**
 * Use these methods to access Vimeo's AI-powered video intelligence features, including automatic
 * transcription, subtitle translation, audio dubbing, and video Q&A. All endpoints require the `ai`
 * OAuth scope and are available exclusively to Enterprise accounts. POST requests are subject to
 * per-endpoint rate limits — contact your account team or Vimeo Sales to increase your allotment.
 * Vimeo AI feature use is subject to [Vimeo's AI
 * Addendum](https://vimeo.com/legal/service-terms/ai).
 */
export class VideosAi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Ask a question about a video
   *
   * @remarks
   * This method asks a question about a video and returns an AI-generated answer with relevant
   * quotes and timecodes. Answering questions requires generating artifacts from the video, so the
   * first request for a new video may return a `202` response — simply retry until a `200` is
   * returned with the answer.
   *
   * @returns The AI-generated answer. The response includes `video_id`, `status` (`completed`), and
   * `data` containing `question`, `answer`, `relevant_quotes` (with `quote` and `timecode`), and
   * `related_questions`. A `202` response means the video is still being prepared — retry after a
   * few seconds.
   *
   * @throws {@link VideosAi.AskAiQuestionError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  askAiQuestion(
    request: VideosAi.AskAiQuestionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosAi.AskAiQuestionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/videos/{video_id}/ai/ask"),
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

  /**
   * Edit text track segments
   *
   * @remarks
   * This method edits transcript segments on the specified text track and automatically triggers
   * the appropriate downstream actions based on the track type:
   *
   * - **Source transcript**: saves edits, then re-translates all subtitle children for the edited
   *   text segments. Timestamp and speaker changes are synced to children directly (no
   *   re-translation for speaker-only edits).
   * - **Dubbed track**: saves edits and triggers audio re-synthesis for the edited segments.
   *   Re-synthesis fires on text edits and on speaker reassignment (the dub is regenerated under
   *   the new speaker's voice).
   * - **Subtitle child**: saves text edits to this track only. Timestamp and speaker changes are
   *   synced to the parent track and all sibling subtitle tracks.
   *
   * To retrieve the `texttrack_id`, use the GET endpoints for
   * [transcription](#get_ai_transcribe_status), [subtitle
   * translation](#get_ai_translate_subtitles_status), or
   * [dubbing](#get_ai_translate_dubbing_status). To retrieve segment UUIDs and their current text
   * and timecodes, use `GET /videos/{video_id}/transcripts/{texttrack_id}`.
   *
   * @returns The result of the edit. Includes `video_id`, `texttrack_id`, `track_type`,
   * `segments_updated`, and optionally `regeneration` with status of any triggered downstream
   * actions.
   *
   * @throws {@link VideosAi.EditAiTexttrackError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editAiTexttrack(
    request: VideosAi.EditAiTexttrackRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosAi.EditAiTexttrackError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/videos/{video_id}/ai/texttracks/{texttrack_id}"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "texttrack_id", value: request.texttrackId, schema: s.float64() },
          { name: "video_id", value: request.videoId, schema: s.float64() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Get supported languages for AI features
   *
   * @remarks
   * This method returns the list of supported languages for AI features. Use the `type` query
   * parameter to filter by feature: `transcription` for speech-to-text languages, `subtitling` for
   * subtitle translation languages, or `dubbing` for audio dubbing languages (includes available
   * accents per language).
   *
   * @returns The list of supported languages. Each entry includes `code` (string) and `name`
   * (string). For dubbing, entries also include `accents` (array of objects with `key`, `label`,
   * and `locale`).
   *
   * @throws {@link VideosAi.GetAiLanguagesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAiLanguages(
    request: VideosAi.GetAiLanguagesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosAi.GetAiLanguagesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/ai/languages"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [],
        query: [{ name: "type", value: request.type, schema: s.optional(s.lazy(() => type52Schema)) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosAi.GetAiLanguagesError,
      },
      options,
    );
  }

  /**
   * Get AI-generated video metadata
   *
   * @remarks
   * This method returns AI-generated metadata for the specified video, including a suggested title,
   * description, and tags based on the video's content. The first request for a new video may
   * return a `202` response while the video is being processed — retry until ready.
   *
   * @returns The AI-generated metadata. The response includes `video_id`, `status` (`completed`),
   * and `data` containing `title` (string), `description` (string), and `tags` (array of strings).
   * A `202` response means the video is still being prepared — retry after a few seconds.
   *
   * @throws {@link VideosAi.GetAiMetadataError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAiMetadata(
    request: VideosAi.GetAiMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosAi.GetAiMetadataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/ai/metadata"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.float64() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosAi.GetAiMetadataError,
      },
      options,
    );
  }

  /**
   * Get suggested questions for a video
   *
   * @remarks
   * This method returns pre-generated questions and answers about a video. These are automatically
   * created when the video is processed and provide a starting point for exploring the video's
   * content. The first request for a new video may return a `202` response while artifacts are
   * being generated — retry until ready.
   *
   * Questions are available in `en`, `fr`, `es`, `de`, `it`, `pt`, `ja`, and `ko`. English is
   * returned by default.
   *
   * @returns The suggested questions and answers. The response includes `video_id`, `status`,
   * `language`, and `data` (array of question objects). A `202` response means the video is still
   * being prepared — retry after a few seconds.
   *
   * @throws {@link VideosAi.GetAiQuestionsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAiQuestions(
    request: VideosAi.GetAiQuestionsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosAi.GetAiQuestionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/ai/ask"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.float64() }],
        query: [{ name: "language", value: request.language, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosAi.GetAiQuestionsError,
      },
      options,
    );
  }

  /**
   * Get AI transcription status for a video
   *
   * @remarks
   * This method returns the current transcription status for a video. The response includes the
   * `video_id`, `status`, and `language`. When the status is `completed`, the response also
   * includes the `texttrack_id` which can be used to read the transcript via `GET
   * /videos/{video_id}/transcripts/{texttrack_id}`.
   *
   * Possible status values: `none` (no transcription requested), `not_started` (queued, awaiting
   * processing), `in_progress`, `completed`, `failed`, `language_not_supported`, `no_speech`,
   * `exceeds_maximum_duration`, `blocked`, `unknown`.
   *
   * @returns The transcription status was returned. The response includes `video_id` (integer),
   * `status` (string), `language` (string), and optionally `texttrack_id` (integer) when status is
   * `completed`.
   *
   * @throws {@link VideosAi.GetAiTranscribeStatusError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAiTranscribeStatus(
    request: VideosAi.GetAiTranscribeStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosAi.GetAiTranscribeStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/ai/transcribe"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.float64() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosAi.GetAiTranscribeStatusError,
      },
      options,
    );
  }

  /**
   * Get AI dubbing status for a video
   *
   * @remarks
   * This method returns the audio dubbing jobs for a video. Each entry includes the language,
   * current status, and — when completed — the `texttrack_id` of the dubbed subtitles and the
   * `audiotrack_uri` of the dubbed audio. Only completed jobs whose text track still exists are
   * included; deleted tracks are omitted.
   *
   * Possible status values: `processing`, `completed`, `completed_with_deleted_texttrack`,
   * `completed_with_deleted_audiotrack`, `failed`, `invalid_input` (the source content was not
   * suitable for dubbing), `not_found`, `unknown`. Jobs where both the text track and audio track
   * have been deleted are omitted entirely.
   *
   * @returns The dubbing status was returned. The response includes `video_id` (integer), `total`
   * (integer), and `data` (array of dubbing job objects). Each entry has `language`, `status`
   * (`processing`, `completed`, `failed`, `completed_with_deleted_texttrack`,
   * `completed_with_deleted_audiotrack`), `accent`, and `texttrack_id` / `audiotrack_uri` when
   * those assets exist. If the most recent action was a regeneration triggered by editing the
   * dubbed text track, an additional `latest_regeneration` object with its own `status` field is
   * included so consumers can tell whether the audio re-synthesis succeeded.
   *
   * @throws {@link VideosAi.GetAiTranslateDubbingStatusError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAiTranslateDubbingStatus(
    request: VideosAi.GetAiTranslateDubbingStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosAi.GetAiTranslateDubbingStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/ai/translate/dubbing"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.float64() }],
        query: [{ name: "language", value: request.language, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosAi.GetAiTranslateDubbingStatusError,
      },
      options,
    );
  }

  /**
   * Get AI subtitle translation status for a video
   *
   * @remarks
   * This method returns the subtitle translation jobs for a video. Each entry includes the
   * language, current status, and — when completed — the `texttrack_id` of the resulting text
   * track. Only completed translations whose text track still exists are included; deleted tracks
   * are omitted.
   *
   * Possible status values: `processing`, `completed`, `failed`, `invalid_input` (the source
   * content was not suitable for translation), `not_found`, `unknown`.
   *
   * @returns The subtitle translation status was returned. The response includes `video_id`
   * (integer), `total` (integer), and `data` (array of translation job objects). Each entry has
   * `language`, `status` (`processing`, `completed`, `failed`, etc.), and `texttrack_id` when the
   * translation exists. If the most recent action on the translation was a regeneration triggered
   * by editing the source transcript, an additional `latest_regeneration` object with its own
   * `status` field is included so consumers can tell whether the latest edit propagated.
   *
   * @throws {@link VideosAi.GetAiTranslateSubtitlesStatusError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAiTranslateSubtitlesStatus(
    request: VideosAi.GetAiTranslateSubtitlesStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosAi.GetAiTranslateSubtitlesStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/videos/{video_id}/ai/translate/subtitles"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [{ name: "video_id", value: request.videoId, schema: s.float64() }],
        query: [{ name: "language", value: request.language, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VideosAi.GetAiTranslateSubtitlesStatusError,
      },
      options,
    );
  }

  /**
   * Start AI transcription for a video
   *
   * @remarks
   * This method generates a transcript from the video's audio using AI speech-to-text. The video
   * must not already have a transcript — delete the existing one first if you need to regenerate.
   * Transcription is asynchronous; use `GET /videos/{video_id}/ai/transcribe` to poll for
   * completion. Once complete, read the transcript via `GET
   * /videos/{video_id}/transcripts/{texttrack_id}`.
   *
   * When no language is provided, the system attempts to auto-detect the spoken language from the
   * video's audio. If detection fails or confidence is too low, it falls back to the video's
   * locale, then the user's locale preference, then English (`en`).
   *
   * @returns The transcription job was queued. The response includes `video_id` and `status`
   * (`not_started`). Poll with GET to track progress.
   *
   * @throws {@link VideosAi.StartAiTranscribeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startAiTranscribe(
    request: VideosAi.StartAiTranscribeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosAi.StartAiTranscribeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/videos/{video_id}/ai/transcribe"),
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

  /**
   * Start AI audio dubbing for a video
   *
   * @remarks
   * This method starts an audio dubbing job for a video. By calling this endpoint, you confirm that
   * you, and your end users, have met all legal requirements to use the voices of the people in the
   * source video to create synthetic audio. This may include obtaining written consent.
   *
   * The video must have finished transcoding, have a completed transcript, and be under 150 minutes
   * in duration. Dubbing is asynchronous; use `GET /videos/{video_id}/ai/translate/dubbing` to poll
   * for completion. Once complete, the dubbed audio appears as an alternate audio track and
   * translated subtitles appear as a new text track.
   *
   * AI credits are deducted from the enterprise account's balance. Dubbing costs more credits than
   * subtitling.
   *
   * @returns The dubbing job was queued. The response includes `video_id` and `status`
   * (`processing`). Use GET /videos/{video_id}/ai/translate/dubbing to track progress.
   *
   * @throws {@link VideosAi.StartAiTranslateDubbingError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startAiTranslateDubbing(
    request: VideosAi.StartAiTranslateDubbingRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosAi.StartAiTranslateDubbingError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/videos/{video_id}/ai/translate/dubbing"),
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

  /**
   * Start AI subtitle translation for a video
   *
   * @remarks
   * This method starts a subtitle translation job for a video. The video must have finished
   * transcoding and have a completed transcript. Translation is asynchronous; use `GET
   * /videos/{video_id}/ai/translate/subtitles` to poll for completion. Once complete, the
   * translated subtitles appear as a new text track accessible via `GET
   * /videos/{video_id}/texttracks`.
   *
   * AI credits are deducted from the enterprise account's balance.
   *
   * @returns The subtitle translation job was queued. The response includes `video_id` and `status`
   * (`processing`). Use GET /videos/{video_id}/ai/translate/subtitles to track progress.
   *
   * @throws {@link VideosAi.StartAiTranslateSubtitlesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VimeoApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startAiTranslateSubtitles(
    request: VideosAi.StartAiTranslateSubtitlesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VideosAi.StartAiTranslateSubtitlesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/videos/{video_id}/ai/translate/subtitles"),
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
    /** The ID of the video. */
    videoId: number;
    body?: VideosAiAskRequest;
  };

  export class AskAiQuestionError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"legacyError", LegacyError>
      | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<AskAiQuestionError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 503, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EditAiTexttrackRequest = {
    /** The ID of the text track. */
    texttrackId: number;
    /** The ID of the video. */
    videoId: number;
    body?: VideosAiTexttracksRequest;
  };

  export class EditAiTexttrackError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"legacyError", LegacyError> | Declared<"error2", Error>
    >;

    static readonly errors: ErrorDecoders<EditAiTexttrackError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 503, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAiLanguagesRequest = {
    /**
     * The AI feature type to list languages for.
     *
     * Option descriptions:
     *  * `dubbing` - Languages supported for AI audio dubbing. Includes available accents per
     *    language.
     *  * `subtitling` - Languages supported for AI subtitle translation.
     *  * `transcription` - Languages supported for AI transcription (speech-to-text).
     */
    type?: Type52;
  };

  export class GetAiLanguagesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error>>;

    static readonly errors: ErrorDecoders<GetAiLanguagesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAiMetadataRequest = {
    /** The ID of the video. */
    videoId: number;
  };

  export class GetAiMetadataError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"legacyError", LegacyError>
      | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<GetAiMetadataError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 503, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAiQuestionsRequest = {
    /** The ID of the video. */
    videoId: number;
    /**
     * The language for suggested questions. Defaults to `en`. Available: `en`, `fr`, `es`, `de`,
     * `it`, `pt`, `ja`, `ko`.
     */
    language?: string;
  };

  export class GetAiQuestionsError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"legacyError", LegacyError> | Declared<"error2", Error>
    >;

    static readonly errors: ErrorDecoders<GetAiQuestionsError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 503, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAiTranscribeStatusRequest = {
    /** The ID of the video. */
    videoId: number;
  };

  export class GetAiTranscribeStatusError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error> | Declared<"legacyError", LegacyError>>;

    static readonly errors: ErrorDecoders<GetAiTranscribeStatusError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type GetAiTranslateDubbingStatusRequest = {
    /** The ID of the video. */
    videoId: number;
    /**
     * Filter results to a specific target language code. When omitted, all dubbing jobs are
     * returned.
     */
    language?: string;
  };

  export class GetAiTranslateDubbingStatusError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"legacyError", LegacyError> | Declared<"error2", Error>
    >;

    static readonly errors: ErrorDecoders<GetAiTranslateDubbingStatusError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 503, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAiTranslateSubtitlesStatusRequest = {
    /** The ID of the video. */
    videoId: number;
    /**
     * Filter results to a specific target language code. When omitted, all subtitle translation
     * jobs are returned.
     */
    language?: string;
  };

  export class GetAiTranslateSubtitlesStatusError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"legacyError", LegacyError> | Declared<"error2", Error>
    >;

    static readonly errors: ErrorDecoders<GetAiTranslateSubtitlesStatusError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 503, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type StartAiTranscribeRequest = {
    /** The ID of the video. */
    videoId: number;
    body?: VideosAiTranscribeRequest;
  };

  export class StartAiTranscribeError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error> | Declared<"error2", Error> | Declared<"legacyError", LegacyError>
    >;

    static readonly errors: ErrorDecoders<StartAiTranscribeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
    ];
  }

  export type StartAiTranslateDubbingRequest = {
    /** The ID of the video. */
    videoId: number;
    body?: VideosAiTranslateDubbingRequest;
  };

  export class StartAiTranslateDubbingError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"legacyError", LegacyError>
      | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<StartAiTranslateDubbingError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 503, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type StartAiTranslateSubtitlesRequest = {
    /** The ID of the video. */
    videoId: number;
    body?: VideosAiTranslateSubtitlesRequest;
  };

  export class StartAiTranslateSubtitlesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"legacyError", LegacyError>
      | Declared<"error3", Error>
    >;

    static readonly errors: ErrorDecoders<StartAiTranslateSubtitlesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "legacyError", decode: { kind: "json", schema: legacyErrorSchema } },
      { on: 503, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
