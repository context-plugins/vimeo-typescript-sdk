import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PersonalTeamFolderOwner = {
  options: string[];
  uri: string;
};

export const personalTeamFolderOwnerSchema: Schema<PersonalTeamFolderOwner> =
  s.object<PersonalTeamFolderOwner>({
    options: s.array(s.string()),
    uri: s.string(),
  });
