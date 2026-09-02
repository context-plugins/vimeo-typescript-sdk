import { s, type Schema } from "../core/index.js";
import { folderUriSchema, type FolderUri } from "./folder-uri.js";
import { status3Schema, type Status3 } from "./status3.js";
import { upgradeToRoleSchema, type UpgradeToRole } from "./upgrade-to-role.js";

export type Properties = {
  folderUri: FolderUri;
  status: Status3;
  upgradeToRole: UpgradeToRole;
};

export const propertiesSchema: Schema<Properties> = s.object<Properties>({
  folderUri: folderUriSchema,
  status: status3Schema,
  upgradeToRole: upgradeToRoleSchema,
  _keysMap: {
    folderUri: "folder_uri",
    upgradeToRole: "upgrade_to_role",
  },
});
