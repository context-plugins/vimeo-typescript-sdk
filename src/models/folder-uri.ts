import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * An object containing data on the value of **folder_uri** and whether it's required for the
 * interaction.
 */
export type FolderUri = {
  /** Whether the URI of the folder must be sent to achieve the desired action. */
  required: boolean;
  /** The URI of the folder to which the team member should have access. */
  value: string;
};

export const folderUriSchema: Schema<FolderUri> = s.object<FolderUri>({
  required: s.boolean(),
  value: s.string(),
});
