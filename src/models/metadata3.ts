import { s, type Schema } from "../core/index.js";
import { connections3Schema, type Connections3 } from "./connections3.js";
import { interactions2Schema, type Interactions2 } from "./interactions2.js";
import { publicVideosSchema, type PublicVideos } from "./public-videos.js";

export type Metadata3 = {
  connections: Connections3;
  interactions: Interactions2;
  msTeamsEncryptedTeamId: string | null;
  publicVideos: PublicVideos;
};

export const metadata3Schema: Schema<Metadata3> = s.object<Metadata3>({
  connections: connections3Schema,
  interactions: interactions2Schema,
  msTeamsEncryptedTeamId: s.nullable(s.string()),
  publicVideos: publicVideosSchema,
  _keysMap: {
    msTeamsEncryptedTeamId: "ms_teams_encrypted_team_id",
    publicVideos: "public_videos",
  },
});
