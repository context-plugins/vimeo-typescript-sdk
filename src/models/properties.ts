import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { folderUriSchema, type FolderUri } from "./folder-uri.js";
import { status3Schema, type Status3 } from "./status3.js";
import { upgradeToRoleSchema, type UpgradeToRole } from "./upgrade-to-role.js";

/** An object of suggested fields to be used for this interaction. */
export type Properties = {
  /**
   * An object containing data on the value of **folder_uri** and whether it's required for the
   * interaction.
   */
  folderUri: FolderUri;
  /**
   * An object containing data on the value of **status** and whether it's required for the
   * interaction.
   */
  status: Status3;
  /**
   * An object containing data on the value of **upgrade_to_role** and whether it's required for the
   * interaction.
   */
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
