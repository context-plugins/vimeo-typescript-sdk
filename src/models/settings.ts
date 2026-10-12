import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The settings of the folder. */
export type Settings = {
  /** The hexadecimal color code of the folder color. */
  color: string;
  /** The ID of the embed preset for the folder. */
  embedPresetId: number | null;
  /** The URI of the folder. */
  folderUri: string | null;
  /** Whether embed preset inheritance is enabled for the folder. */
  isEmbedPresetInheritanceEnabled?: boolean;
};

export const settingsSchema: Schema<Settings> = s.object<Settings>({
  color: s.string(),
  embedPresetId: s.nullable(s.float64()),
  folderUri: s.nullable(s.string()),
  isEmbedPresetInheritanceEnabled: s.optional(s.boolean()),
  _keysMap: {
    embedPresetId: "embed_preset_id",
    folderUri: "folder_uri",
    isEmbedPresetInheritanceEnabled: "is_embed_preset_inheritance_enabled",
  },
});
