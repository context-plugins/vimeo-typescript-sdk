import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { availableVideosSchema, type AvailableVideos } from "./available-videos.js";
import { requestedClipSchema, type RequestedClip } from "./requested-clip.js";
import { videos9Schema, type Videos9 } from "./videos9.js";

export type Connections11 = {
  availableVideos: AvailableVideos;
  requestedClip: RequestedClip;
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
