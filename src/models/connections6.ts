import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { requestedClipSchema, type RequestedClip } from "./requested-clip.js";
import { users2Schema, type Users2 } from "./users2.js";
import { videos6Schema, type Videos6 } from "./videos6.js";

/** A collection of information that is connected to this resource. */
export type Connections6 = {
  /** Information about the requested video. */
  requestedClip: RequestedClip;
  /** Information about the members or moderators of the group. */
  users: Users2;
  /** Information about the videos contained within the group. */
  videos: Videos6;
};

export const connections6Schema: Schema<Connections6> = s.object<Connections6>({
  requestedClip: requestedClipSchema,
  users: users2Schema,
  videos: videos6Schema,
  _keysMap: {
    requestedClip: "requested_clip",
  },
});
