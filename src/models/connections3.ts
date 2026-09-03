import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { albumsSchema, type Albums } from "./albums.js";
import { appearancesSchema, type Appearances } from "./appearances.js";
import { blockSchema, type Block } from "./block.js";
import { categoriesSchema, type Categories } from "./categories.js";
import { channels1Schema, type Channels1 } from "./channels1.js";
import { connectedAppsSchema, type ConnectedApps } from "./connected-apps.js";
import { feedSchema, type Feed } from "./feed.js";
import { foldersRootSchema, type FoldersRoot } from "./folders-root.js";
import { followersSchema, type Followers } from "./followers.js";
import { followingSchema, type Following } from "./following.js";
import { groups1Schema, type Groups1 } from "./groups1.js";
import { importAppsSchema, type ImportApps } from "./import-apps.js";
import { leadCaptureFormSchema, type LeadCaptureForm } from "./lead-capture-form.js";
import { likesSchema, type Likes } from "./likes.js";
import { moderatedChannelsSchema, type ModeratedChannels } from "./moderated-channels.js";
import { msTeamsTeamFolderIdSchema, type MsTeamsTeamFolderId } from "./ms-teams-team-folder-id.js";
import { picturesSchema, type Pictures } from "./pictures.js";
import { portfoliosSchema, type Portfolios } from "./portfolios.js";
import { projectsSchema, type Projects } from "./projects.js";
import { recommendedChannelsSchema, type RecommendedChannels } from "./recommended-channels.js";
import { recommendedUsersSchema, type RecommendedUsers } from "./recommended-users.js";
import { sharedSchema, type Shared } from "./shared.js";
import { videos3Schema, type Videos3 } from "./videos3.js";
import { viewProfileSchema, type ViewProfile } from "./view-profile.js";
import { watchedVideosSchema, type WatchedVideos } from "./watched-videos.js";
import { watchlaterSchema, type Watchlater } from "./watchlater.js";

export type Connections3 = {
  albums: Albums;
  appearances: Appearances;
  block?: Block;
  categories: Categories;
  channels: Channels1;
  connectedApps?: ConnectedApps;
  feed: Feed;
  foldersRoot: FoldersRoot;
  followers: Followers;
  following: Following;
  groups: Groups1;
  importApps?: ImportApps;
  leadCaptureForm?: LeadCaptureForm;
  likes: Likes;
  moderatedChannels: ModeratedChannels;
  msTeamsTeamFolderId?: MsTeamsTeamFolderId | null;
  msTeamsTenantTokenId?: string | null;
  pictures: Pictures;
  portfolios: Portfolios;
  projects?: Projects;
  recommendedChannels?: RecommendedChannels;
  recommendedUsers?: RecommendedUsers;
  shared: Shared;
  videos: Videos3;
  viewProfile?: ViewProfile;
  watchedVideos?: WatchedVideos;
  watchlater: Watchlater;
};

export const connections3Schema: Schema<Connections3> = s.object<Connections3>({
  albums: albumsSchema,
  appearances: appearancesSchema,
  block: s.optional(s.lazy(() => blockSchema)),
  categories: categoriesSchema,
  channels: channels1Schema,
  connectedApps: s.optional(s.lazy(() => connectedAppsSchema)),
  feed: feedSchema,
  foldersRoot: foldersRootSchema,
  followers: followersSchema,
  following: followingSchema,
  groups: groups1Schema,
  importApps: s.optional(s.lazy(() => importAppsSchema)),
  leadCaptureForm: s.optional(s.lazy(() => leadCaptureFormSchema)),
  likes: likesSchema,
  moderatedChannels: moderatedChannelsSchema,
  msTeamsTeamFolderId: s.optionalNullable(s.lazy(() => msTeamsTeamFolderIdSchema)),
  msTeamsTenantTokenId: s.optionalNullable(s.string()),
  pictures: picturesSchema,
  portfolios: portfoliosSchema,
  projects: s.optional(s.lazy(() => projectsSchema)),
  recommendedChannels: s.optional(s.lazy(() => recommendedChannelsSchema)),
  recommendedUsers: s.optional(s.lazy(() => recommendedUsersSchema)),
  shared: sharedSchema,
  videos: videos3Schema,
  viewProfile: s.optional(s.lazy(() => viewProfileSchema)),
  watchedVideos: s.optional(s.lazy(() => watchedVideosSchema)),
  watchlater: watchlaterSchema,
  _keysMap: {
    connectedApps: "connected_apps",
    foldersRoot: "folders_root",
    importApps: "import_apps",
    leadCaptureForm: "lead_capture_form",
    moderatedChannels: "moderated_channels",
    msTeamsTeamFolderId: "ms_teams_team_folder_id",
    msTeamsTenantTokenId: "ms_teams_tenant_token_id",
    recommendedChannels: "recommended_channels",
    recommendedUsers: "recommended_users",
    viewProfile: "view_profile",
    watchedVideos: "watched_videos",
  },
});
