import { s, type Schema } from "../core/index.js";
import { liveVideoSchema, type LiveVideo } from "./live-video.js";
import { pictures3Schema, type Pictures3 } from "./pictures3.js";
import { preLiveVideoSchema, type PreLiveVideo } from "./pre-live-video.js";
import { teamMemberSchema, type TeamMember } from "./team-member.js";
import { videos10Schema, type Videos10 } from "./videos10.js";

export type Connections15 = {
  liveVideo: LiveVideo | null;
  pictures: Pictures3;
  preLiveVideo: PreLiveVideo | null;
  teamMember: TeamMember | null;
  videos: Videos10;
};

export const connections15Schema: Schema<Connections15> = s.object<Connections15>({
  liveVideo: s.nullable(s.lazy(() => liveVideoSchema)),
  pictures: pictures3Schema,
  preLiveVideo: s.nullable(s.lazy(() => preLiveVideoSchema)),
  teamMember: s.nullable(s.lazy(() => teamMemberSchema)),
  videos: videos10Schema,
  _keysMap: {
    liveVideo: "live_video",
    preLiveVideo: "pre_live_video",
    teamMember: "team_member",
  },
});
