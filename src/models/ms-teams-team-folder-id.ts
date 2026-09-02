import { s, type Schema } from "../core/index.js";

export type MsTeamsTeamFolderId = {
  options?: string[];
  uri?: string;
};

export const msTeamsTeamFolderIdSchema: Schema<MsTeamsTeamFolderId> = s.object<MsTeamsTeamFolderId>({
  options: s.optional(s.array(s.string())),
  uri: s.optional(s.string()),
});
