import { s, type Schema } from "../core/index.js";
import { groups2Schema, type Groups2 } from "./groups2.js";
import { owner1Schema, type Owner1 } from "./owner1.js";
import { personalTeamFolderSchema, type PersonalTeamFolder } from "./personal-team-folder.js";

export type Connections24 = {
  groups: Groups2;
  owner: Owner1;
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
