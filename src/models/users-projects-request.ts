import { s, type Schema } from "../core/index.js";

export type UsersProjectsRequest = {
  name: string;
  parentFolderUri?: string;
};

export const usersProjectsRequestSchema: Schema<UsersProjectsRequest> = s.object<UsersProjectsRequest>({
  name: s.string(),
  parentFolderUri: s.optional(s.string()),
  _keysMap: {
    parentFolderUri: "parent_folder_uri",
  },
});
