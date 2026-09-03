import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MsTeamsTeamFolderId = {
  options?: string[];
  uri?: string;
};

export const msTeamsTeamFolderIdSchema: Schema<MsTeamsTeamFolderId> = s.object<MsTeamsTeamFolderId>({
  options: s.optional(s.array(s.string())),
  uri: s.optional(s.string()),
});
