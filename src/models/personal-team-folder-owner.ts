import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the owner of the personal team folder. */
export type PersonalTeamFolderOwner = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The URI of the owner of the personal team folder. */
  uri: string;
};

export const personalTeamFolderOwnerSchema: Schema<PersonalTeamFolderOwner> =
  s.object<PersonalTeamFolderOwner>({
    options: s.array(s.string()),
    uri: s.string(),
  });
