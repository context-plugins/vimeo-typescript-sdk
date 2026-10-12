import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the authenticated user's root level folders and videos. */
export type FoldersRoot = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const foldersRootSchema: Schema<FoldersRoot> = s.object<FoldersRoot>({
  options: s.array(s.string()),
  uri: s.string(),
});
