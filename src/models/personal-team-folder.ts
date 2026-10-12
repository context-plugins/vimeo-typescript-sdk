import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A standard connection object indicating how to return personal team folders. */
export type PersonalTeamFolder = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The total number of personal team folders on this connection. */
  total: number;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const personalTeamFolderSchema: Schema<PersonalTeamFolder> = s.object<PersonalTeamFolder>({
  options: s.array(s.string()),
  total: s.float64(),
  uri: s.string(),
});
