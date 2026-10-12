import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metadata5Schema, type Metadata5 } from "./metadata5.js";
import { privacy2Schema, type Privacy2 } from "./privacy2.js";
import { reviewLinkSchema, type ReviewLink } from "./review-link.js";
import { settingsSchema, type Settings } from "./settings.js";
import { userSchema, type User } from "./user.js";

export type Project = {
  /**
   * The access grant response that applies to the team member. _This field is deprecated because
   * grants are no longer exposed via API responses._
   *
   * @deprecated
   */
  accessGrant: Record<string, unknown>;
  /** The time in ISO 8601 format when the folder was created. */
  createdTime: string;
  /** The URI for the user who created the folder. */
  creatorUri: string;
  /** Whether this folder has at least one subfolder. */
  hasSubfolder: boolean;
  /** Whether the folder is pinned. */
  isPinned: boolean;
  /** Whether the folder is a private-to-me folder for the user. */
  isPrivateToUser: boolean;
  /** Whether the current user has starred this folder. */
  isStarredByCurUser: boolean;
  /** The time in ISO 8601 format when a user last performed an action on the folder. */
  lastUserActionEventDate: string | null;
  /** The link to the folder on Vimeo. */
  link: string;
  /** The link to the folder management page. */
  manageLink: string;
  /** Information about the folders's metadata. */
  metadata: Metadata5;
  /** The time in ISO 8601 format when the folder was last modified. */
  modifiedTime: string;
  /** The name of the folder. */
  name: string;
  /** The time in ISO 8601 format when the folder was pinned. */
  pinnedOn: string | null;
  /** The privacy settings of the folder. */
  privacy: Privacy2;
  /** The resource key string of the folder. */
  resourceKey: string;
  /** All active review links associated with the folder. */
  reviewLinks?: ReviewLink[];
  /** The settings of the folder. */
  settings: Settings;
  /**
   * Whether to display a folder notification that directs the current user to the team library
   * page.
   */
  shouldShowTeamLibraryNotification: boolean;
  /** The URI of the folder. */
  uri: string;
  /** The owner of the folder. */
  user: User;
};

export const projectSchema: Schema<Project> = s.object<Project>({
  accessGrant: s.record(s.string(), s.unknown()),
  createdTime: s.string(),
  creatorUri: s.string(),
  hasSubfolder: s.boolean(),
  isPinned: s.boolean(),
  isPrivateToUser: s.boolean(),
  isStarredByCurUser: s.boolean(),
  lastUserActionEventDate: s.nullable(s.string()),
  link: s.string(),
  manageLink: s.string(),
  metadata: metadata5Schema,
  modifiedTime: s.string(),
  name: s.string(),
  pinnedOn: s.nullable(s.string()),
  privacy: privacy2Schema,
  resourceKey: s.string(),
  reviewLinks: s.optional(s.array(s.lazy(() => reviewLinkSchema))),
  settings: settingsSchema,
  shouldShowTeamLibraryNotification: s.boolean(),
  uri: s.string(),
  user: userSchema,
  _keysMap: {
    accessGrant: "access_grant",
    createdTime: "created_time",
    creatorUri: "creator_uri",
    hasSubfolder: "has_subfolder",
    isPinned: "is_pinned",
    isPrivateToUser: "is_private_to_user",
    isStarredByCurUser: "is_starred_by_cur_user",
    lastUserActionEventDate: "last_user_action_event_date",
    manageLink: "manage_link",
    modifiedTime: "modified_time",
    pinnedOn: "pinned_on",
    resourceKey: "resource_key",
    reviewLinks: "review_links",
    shouldShowTeamLibraryNotification: "should_show_team_library_notification",
  },
});
