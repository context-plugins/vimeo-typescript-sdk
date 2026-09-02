import { s, type Schema } from "../core/index.js";

export type PersonalTeamFolderOwner = {
  options: string[];
  uri: string;
};

export const personalTeamFolderOwnerSchema: Schema<PersonalTeamFolderOwner> =
  s.object<PersonalTeamFolderOwner>({
    options: s.array(s.string()),
    uri: s.string(),
  });
