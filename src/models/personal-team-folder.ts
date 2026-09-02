import { s, type Schema } from "../core/index.js";

export type PersonalTeamFolder = {
  options: string[];
  total: number;
  uri: string;
};

export const personalTeamFolderSchema: Schema<PersonalTeamFolder> = s.object<PersonalTeamFolder>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
