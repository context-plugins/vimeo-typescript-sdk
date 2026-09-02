import { s, type Schema } from "../core/index.js";

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
