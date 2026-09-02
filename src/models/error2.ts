import { s, type EnumSchema } from "../core/index.js";

export const Error2 = {
  AnalysisFailed: "analysis_failed",
  DisallowedAddress: "disallowed_address",
  DisallowedContentType: "disallowed_content_type",
  DurationTooLong: "duration_too_long",
  DurationTooShort: "duration_too_short",
  EmptyUpload: "empty_upload",
  ExceededRetryCount: "exceeded_retry_count",
  Internal: "internal",
  InvalidRedirects: "invalid_redirects",
  MaxFileSizeExceeded: "max_file_size_exceeded",
  MissingVideoStream: "missing_video_stream",
  RemoteBadRequest: "remote_bad_request",
  RemoteForbidden: "remote_forbidden",
  RemoteInternal: "remote_internal",
  RemoteNotFound: "remote_not_found",
  RemoteUnauthorized: "remote_unauthorized",
  ResolutionDimensionTooSmall: "resolution_dimension_too_small",
  UnsupportedVideoProjection: "unsupported_video_projection",
} as const;
export type Error2 = (typeof Error2)[keyof typeof Error2] | (string & {});

export const error2Schema: EnumSchema<Error2> = s.enumOf<Error2>(Error2);
