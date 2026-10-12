import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A standard connection object indicating how to return the folder's parent folder. */
export type ParentFolder = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const parentFolderSchema: Schema<ParentFolder> = s.object<ParentFolder>({
  options: s.array(s.string()),
  uri: s.string(),
});
