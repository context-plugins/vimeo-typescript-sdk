import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connections3Schema, type Connections3 } from "./connections3.js";
import { interactions2Schema, type Interactions2 } from "./interactions2.js";
import { publicVideosSchema, type PublicVideos } from "./public-videos.js";

/** The authenticated user's metadata. */
export type Metadata3 = {
  /** The list of resource URIs related to the authenticated user. */
  connections: Connections3;
  interactions: Interactions2;
  /** Information about the Microsoft Teams encrypted team ID. */
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
