import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about adding a subfolder to the current folder. */
export type AddSubfolder = {
  /** Whether the folder can contain a subfolder. */
  canAddSubfolders: boolean;
  /** The subfolder content type. */
  contentType?: string;
  /** An array of HTTP methods permitted on this URI. */
  options?: string[];
  /** Properties that can be added to the request body. */
  properties?: string[];
  /** Whether the user has reached the maximum subfolder depth. */
  subfolderDepthLimitReached: boolean;
  /** The API URI that resolves to the connection data. */
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
