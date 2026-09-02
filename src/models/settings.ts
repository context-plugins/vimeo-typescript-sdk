import { s, type Schema } from "../core/index.js";

export type Settings = {
  color: string;
  embedPresetId: number | null;
  folderUri: string | null;
  isEmbedPresetInheritanceEnabled?: boolean;
};

export const settingsSchema: Schema<Settings> = s.object<Settings>({
  color: s.string(),
  embedPresetId: s.nullable(s.number()),
  folderUri: s.nullable(s.string()),
  isEmbedPresetInheritanceEnabled: s.optional(s.boolean()),
  _keysMap: {
    embedPresetId: "embed_preset_id",
    folderUri: "folder_uri",
    isEmbedPresetInheritanceEnabled: "is_embed_preset_inheritance_enabled",
  },
});
