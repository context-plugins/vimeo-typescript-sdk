import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { folderUriSchema, type FolderUri } from "./folder-uri.js";
import { status2Schema, type Status2 } from "./status2.js";
import { upgradeToRoleSchema, type UpgradeToRole } from "./upgrade-to-role.js";

export type Properties = {
  folderUri: FolderUri;
  status: Status2;
  upgradeToRole: UpgradeToRole;
};

export const propertiesSchema: Schema<Properties> = s.object<Properties>({
  folderUri: folderUriSchema,
  status: status2Schema,
  upgradeToRole: upgradeToRoleSchema,
  _keysMap: {
    folderUri: "folder_uri",
    upgradeToRole: "upgrade_to_role",
  },
});
