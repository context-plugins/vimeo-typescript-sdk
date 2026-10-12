import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ancestorPath1Schema, type AncestorPath1 } from "./ancestor-path1.js";
import { dataRetentionSchema, type DataRetention } from "./data-retention.js";
import { foldersSchema, type Folders } from "./folders.js";
import { groupFolderGrantsSchema, type GroupFolderGrants } from "./group-folder-grants.js";
import { itemsSchema, type Items } from "./items.js";
import { parentFolderSchema, type ParentFolder } from "./parent-folder.js";
import { personalTeamFolderOwnerSchema, type PersonalTeamFolderOwner } from "./personal-team-folder-owner.js";
import {
  resourceCreatorTeamUser1Schema,
  type ResourceCreatorTeamUser1,
} from "./resource-creator-team-user1.js";
import { teamPermissions1Schema, type TeamPermissions1 } from "./team-permissions1.js";
import { userFolderAccessGrantsSchema, type UserFolderAccessGrants } from "./user-folder-access-grants.js";
import { videos5Schema, type Videos5 } from "./videos5.js";

/** A list of resource URIs related to the folder. */
export type Connections5 = {
  /**
   * Information about the folder's ancestry ordered from the direct parent to higher-level
   * ancestors.
   */
  ancestorPath: AncestorPath1[];
  dataRetention: DataRetention;
  /** A standard connection object indicating how to return all the subfolders in the folder. */
  folders: Folders;
  /** Information about the folder's group access grants. */
  groupFolderGrants: GroupFolderGrants;
  /** A standard connection object indicating how to return all the items in the folder. */
  items: Items;
  /** A standard connection object indicating how to return the folder's parent folder. */
  parentFolder: ParentFolder;
  /** Information about the owner of the personal team folder. */
  personalTeamFolderOwner: PersonalTeamFolderOwner;
  /**
   * Information about the team user who created the folder. This data requires a bearer token with
   * the `private` scope.
   */
  resourceCreatorTeamUser: ResourceCreatorTeamUser1;
  /**
   * Information about the folder's team permissions list. This data requires a bearer token with
   * the `private` scope.
   */
  teamPermissions: TeamPermissions1;
  /** Information about the folder's user folder access grants. */
  userFolderAccessGrants: UserFolderAccessGrants;
  /** A standard connection object indicating how to return all the videos in the folder. */
  videos: Videos5;
};

export const connections5Schema: Schema<Connections5> = s.object<Connections5>({
  ancestorPath: s.array(s.lazy(() => ancestorPath1Schema)),
  dataRetention: dataRetentionSchema,
  folders: foldersSchema,
  groupFolderGrants: groupFolderGrantsSchema,
  items: itemsSchema,
  parentFolder: parentFolderSchema,
  personalTeamFolderOwner: personalTeamFolderOwnerSchema,
  resourceCreatorTeamUser: resourceCreatorTeamUser1Schema,
  teamPermissions: teamPermissions1Schema,
  userFolderAccessGrants: userFolderAccessGrantsSchema,
  videos: videos5Schema,
  _keysMap: {
    ancestorPath: "ancestor_path",
    dataRetention: "data_retention",
    groupFolderGrants: "group_folder_grants",
    parentFolder: "parent_folder",
    personalTeamFolderOwner: "personal_team_folder_owner",
    resourceCreatorTeamUser: "resource_creator_team_user",
    teamPermissions: "team_permissions",
    userFolderAccessGrants: "user_folder_access_grants",
  },
});
