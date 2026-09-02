import { s, type Schema } from "../core/index.js";

export type AddSubfolder = {
  canAddSubfolders: boolean;
  contentType?: string;
  options?: string[];
  properties?: string[];
  subfolderDepthLimitReached: boolean;
  uri?: string;
};

export const addSubfolderSchema: Schema<AddSubfolder> = s.object<AddSubfolder>({
  canAddSubfolders: s.boolean(),
  contentType: s.optional(s.string()),
  options: s.optional(s.array(s.string())),
  properties: s.optional(s.array(s.string())),
  subfolderDepthLimitReached: s.boolean(),
  uri: s.optional(s.string()),
  _keysMap: {
    canAddSubfolders: "can_add_subfolders",
    contentType: "content_type",
    subfolderDepthLimitReached: "subfolder_depth_limit_reached",
  },
});
