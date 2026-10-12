import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A standard connection object indicating how to return all the subfolders in the folder. */
export type Folders = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The total number of subfolders on this connection. */
  total: number;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const foldersSchema: Schema<Folders> = s.object<Folders>({
  options: s.array(s.string()),
  total: s.float64(),
  uri: s.string(),
});
