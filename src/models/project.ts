import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metadata5Schema, type Metadata5 } from "./metadata5.js";
import { privacy2Schema, type Privacy2 } from "./privacy2.js";
import { reviewLinkSchema, type ReviewLink } from "./review-link.js";
import { settingsSchema, type Settings } from "./settings.js";
import { userSchema, type User } from "./user.js";

export type Project = {
  accessGrant: Record<string, unknown>;
  createdTime: string;
  creatorUri: string;
  hasSubfolder: boolean;
  isPinned: boolean;
  isPrivateToUser: boolean;
  isStarredByCurUser: boolean;
  lastUserActionEventDate: string | null;
  link: string;
  manageLink: string;
  metadata: Metadata5;
  modifiedTime: string;
  name: string;
  pinnedOn: string | null;
  privacy: Privacy2;
  resourceKey: string;
  reviewLinks?: ReviewLink[];
  settings: Settings;
  shouldShowTeamLibraryNotification: boolean;
  uri: string;
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
