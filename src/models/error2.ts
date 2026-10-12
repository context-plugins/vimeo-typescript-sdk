import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The error that caused the upload to fail.
 *
 * Option descriptions:
 *  * `analysis_failed` - The uploaded file could not be decoded.
 *  * `disallowed_address` - The URL for a 'pull' approach upload resolved to a disallowed address.
 *  * `disallowed_content_type` - The user attempted to upload a file of an unsupported
 *    Content-Type.
 *  * `duration_too_long` - The uploaded video exceeds the maximum allowed duration of 24 hours.
 *  * `duration_too_short` - The uploaded video is shorter than the minimum allowed duration of 0.5
 *    seconds.
 *  * `empty_upload` - The user attempted to upload a 0-byte file.
 *  * `exceeded_retry_count` - The upload failed too many times with otherwise retryable errors.
 *  * `internal` - The upload failed due to an internal error.
 *  * `invalid_redirects` - The URL for a 'pull' upload performed too many redirects.
 *  * `max_file_size_exceeded` - The uploaded file exceeds the maximum allowed size of 300 GB.
 *  * `missing_video_stream` - The uploaded file contains no video stream.
 *  * `remote_bad_request` - The remote server for a 'pull'-approach upload responded with another
 *    400-level status error.
 *  * `remote_forbidden` - The remote server for a 'pull'-approach upload responded with a
 *    'Forbidden' error.
 *  * `remote_internal` - The remote server for a 'pull'-approach upload responded with a 500-level
 *    status error.
 *  * `remote_not_found` - The remote server for a 'pull'-approach upload responded with a 'Not
 *    Found' error.
 *  * `remote_unauthorized` - The remote server for a 'pull'-approach upload responded with an
 *    'Unauthorized' error.
 *  * `resolution_dimension_too_small` - The uploaded video's resolution has a dimension under the
 *    minimum allowed value of 2 pixels.
 *  * `unsupported_video_projection` - The uploaded video uses an unsupported spatial projection.
 */
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
