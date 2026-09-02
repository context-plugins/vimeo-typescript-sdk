import { s, type Schema } from "../core/index.js";
import { requestedClipSchema, type RequestedClip } from "./requested-clip.js";
import { users2Schema, type Users2 } from "./users2.js";
import { videos6Schema, type Videos6 } from "./videos6.js";

export type Connections6 = {
  requestedClip: RequestedClip;
  users: Users2;
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
