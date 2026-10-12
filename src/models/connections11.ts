import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { availableVideosSchema, type AvailableVideos } from "./available-videos.js";
import { requestedClipSchema, type RequestedClip } from "./requested-clip.js";
import { videos9Schema, type Videos9 } from "./videos9.js";

/** Information about showcase connections. */
export type Connections11 = {
  /**
   * Information about the authenticated user's videos that can be added to or removed from this
   * showcase. This data requires a bearer token with the `private` scope.
   */
  availableVideos: AvailableVideos;
  /** Information about the requested video. */
  requestedClip: RequestedClip;
  /** Information about the videos that belong to the showcase. */
  videos: Videos9;
};

export const connections11Schema: Schema<Connections11> = s.object<Connections11>({
  availableVideos: availableVideosSchema,
  requestedClip: requestedClipSchema,
  videos: videos9Schema,
  _keysMap: {
    availableVideos: "available_videos",
    requestedClip: "requested_clip",
  },
});
