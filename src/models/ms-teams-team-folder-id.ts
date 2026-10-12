import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the upload folder for Microsoft Teams recordings. */
export type MsTeamsTeamFolderId = {
  /** An array of HTTP methods permitted on this URI. */
  options?: string[];
  /** The API URI that resolves to the connection data. */
  uri?: string;
};

export const msTeamsTeamFolderIdSchema: Schema<MsTeamsTeamFolderId> = s.object<MsTeamsTeamFolderId>({
  options: s.optional(s.array(s.string())),
  uri: s.optional(s.string()),
});
