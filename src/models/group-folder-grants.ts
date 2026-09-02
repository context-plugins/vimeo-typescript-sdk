import { s, type Schema } from "../core/index.js";

export type GroupFolderGrants = {
  options: string[];
  total: number;
  uri: string;
};

export const groupFolderGrantsSchema: Schema<GroupFolderGrants> = s.object<GroupFolderGrants>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
