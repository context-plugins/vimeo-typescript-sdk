import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the video's versions. */
export type Versions = {
  /** The storyboard ID of the video version. */
  createStoryboardId?: string;
  /** The URI of the current version of the video. */
  currentUri?: string;
  /** Whether the video has interactive capability. */
  hasInteractive?: boolean;
  /** An array of HTTP methods permitted on this URI. */
  options?: string[];
  /**
   * Whether the video has unified resolution. If the value of this field is `false`, the video
   * requires transcoding.
   */
  originVariableFrameResolution?: boolean;
  /** The resource key string of the current version of the video. */
  resourceKey?: string;
  /** The sequence number of the video version. */
  sequenceNumber: number | null;
  /** The total number of versions on this connection. */
  total?: number;
  /** The total number of versions on this connection, including deleted versions. */
  totalIncludingDeleted?: number;
  /** The API URI that resolves to the connection data. */
  uri?: string;
};

export const versionsSchema: Schema<Versions> = s.object<Versions>({
  createStoryboardId: s.optional(s.string()),
  currentUri: s.optional(s.string()),
  hasInteractive: s.optional(s.boolean()),
  options: s.optional(s.array(s.string())),
  originVariableFrameResolution: s.optional(s.boolean()),
  resourceKey: s.optional(s.string()),
  sequenceNumber: s.nullable(s.float64()),
  total: s.optional(s.float64()),
  totalIncludingDeleted: s.optional(s.float64()),
  uri: s.optional(s.string()),
  _keysMap: {
    createStoryboardId: "create_storyboard_id",
    currentUri: "current_uri",
    hasInteractive: "has_interactive",
    originVariableFrameResolution: "origin_variable_frame_resolution",
    resourceKey: "resource_key",
    sequenceNumber: "sequence_number",
    totalIncludingDeleted: "total_including_deleted",
  },
});
