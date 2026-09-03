import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
