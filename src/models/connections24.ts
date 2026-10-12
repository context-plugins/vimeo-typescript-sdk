import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { groups2Schema, type Groups2 } from "./groups2.js";
import { owner1Schema, type Owner1 } from "./owner1.js";
import { personalTeamFolderSchema, type PersonalTeamFolder } from "./personal-team-folder.js";

/** A list of resource URIs related to the user. */
export type Connections24 = {
  /**
   * A standard connection object indicating how to return groups that this team user is a part of.
   */
  groups: Groups2;
  /** Information about the team owner. */
  owner: Owner1;
  /** A standard connection object indicating how to return personal team folders. */
  personalTeamFolder: PersonalTeamFolder;
};

export const connections24Schema: Schema<Connections24> = s.object<Connections24>({
  groups: groups2Schema,
  owner: owner1Schema,
  personalTeamFolder: personalTeamFolderSchema,
  _keysMap: {
    personalTeamFolder: "personal_team_folder",
  },
});
