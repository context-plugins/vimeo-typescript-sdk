import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MeProjectsRequest = {
  name: string;
  parentFolderUri?: string;
};

export const meProjectsRequestSchema: Schema<MeProjectsRequest> = s.object<MeProjectsRequest>({
  name: s.string(),
  parentFolderUri: s.optional(s.string()),
  _keysMap: {
    parentFolderUri: "parent_folder_uri",
  },
});
