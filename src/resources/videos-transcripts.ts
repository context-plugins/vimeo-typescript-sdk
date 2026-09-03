import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { segmentConnectionSchema, type SegmentConnection } from "../models/segment-connection.js";
import { transcriptMetadataSchema, type TranscriptMetadata } from "../models/transcript-metadata.js";
import type { Servers } from "../servers.js";

export class VideosTranscripts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getTranscript(
    request: VideosTranscripts.GetTranscriptRequest,
    options?: RequestOptions,
  ): ApiPromise<SegmentConnection, VideosTranscripts.GetTranscriptError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{video_id}/transcripts/{texttrack_id}"),
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
        success: { kind: "json", schema: segmentConnectionSchema },
        errorFactory: VideosTranscripts.GetTranscriptError,
      },
      options,
    );
  }

  getTranscriptMetadata(
    request: VideosTranscripts.GetTranscriptMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<TranscriptMetadata, VideosTranscripts.GetTranscriptMetadataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/videos/{container_uuid}/transcript/{texttrack_id}/metadata"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearer,
        ),
        pathParams: [
          { name: "container_uuid", value: request.containerUuid, schema: s.string() },
          { name: "texttrack_id", value: request.texttrackId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transcriptMetadataSchema },
        errorFactory: VideosTranscripts.GetTranscriptMetadataError,
      },
      options,
    );
  }
}

export namespace VideosTranscripts {
  export type GetTranscriptRequest = {
    texttrackId: number;
    videoId: number;
  };

  export class GetTranscriptError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<GetTranscriptError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetTranscriptMetadataRequest = {
    containerUuid: string;
    texttrackId: number;
  };

  export class GetTranscriptMetadataError extends ResponseError<Declared<"error", Error>> {
    static readonly errors: ErrorDecoders<GetTranscriptMetadataError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
