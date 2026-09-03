import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { albums1Schema, type Albums1 } from "./albums1.js";
import { ancestorPathSchema, type AncestorPath } from "./ancestor-path.js";
import { availableAlbumsSchema, type AvailableAlbums } from "./available-albums.js";
import { availableChannelsSchema, type AvailableChannels } from "./available-channels.js";
import { comments1Schema, type Comments1 } from "./comments1.js";
import { creditsSchema, type Credits } from "./credits.js";
import { likes1Schema, type Likes1 } from "./likes1.js";
import { ondemandSchema, type Ondemand } from "./ondemand.js";
import { pictures1Schema, type Pictures1 } from "./pictures1.js";
import { publishToSocialSchema, type PublishToSocial } from "./publish-to-social.js";
import { recommendationsSchema, type Recommendations } from "./recommendations.js";
import { relatedSchema, type Related } from "./related.js";
import { resourceCreatorTeamUserSchema, type ResourceCreatorTeamUser } from "./resource-creator-team-user.js";
import { seasonSchema, type Season } from "./season.js";
import { teamPermissionsSchema, type TeamPermissions } from "./team-permissions.js";
import { texttracksSchema, type Texttracks } from "./texttracks.js";
import { trailerSchema, type Trailer } from "./trailer.js";
import { usersWithAccessSchema, type UsersWithAccess } from "./users-with-access.js";
import { versionsSchema, type Versions } from "./versions.js";

export type Connections4 = {
  albums?: Albums1;
  ancestorPath: AncestorPath[];
  availableAlbums?: AvailableAlbums;
  availableChannels?: AvailableChannels;
  comments: Comments1;
  credits: Credits | null;
  likes: Likes1;
  ondemand?: Ondemand;
  pictures: Pictures1;
  publishToSocial?: PublishToSocial;
  recommendations: Recommendations | null;
  related: Related | null;
  resourceCreatorTeamUser: ResourceCreatorTeamUser;
  season?: Season;
  teamPermissions?: TeamPermissions;
  texttracks: Texttracks;
  trailer?: Trailer;
  usersWithAccess?: UsersWithAccess;
  versions: Versions;
};

export const connections4Schema: Schema<Connections4> = s.object<Connections4>({
  albums: s.optional(s.lazy(() => albums1Schema)),
  ancestorPath: s.array(s.lazy(() => ancestorPathSchema)),
  availableAlbums: s.optional(s.lazy(() => availableAlbumsSchema)),
  availableChannels: s.optional(s.lazy(() => availableChannelsSchema)),
  comments: comments1Schema,
  credits: s.nullable(s.lazy(() => creditsSchema)),
  likes: likes1Schema,
  ondemand: s.optional(s.lazy(() => ondemandSchema)),
  pictures: pictures1Schema,
  publishToSocial: s.optional(s.lazy(() => publishToSocialSchema)),
  recommendations: s.nullable(s.lazy(() => recommendationsSchema)),
  related: s.nullable(s.lazy(() => relatedSchema)),
  resourceCreatorTeamUser: resourceCreatorTeamUserSchema,
  season: s.optional(s.lazy(() => seasonSchema)),
  teamPermissions: s.optional(s.lazy(() => teamPermissionsSchema)),
  texttracks: texttracksSchema,
  trailer: s.optional(s.lazy(() => trailerSchema)),
  usersWithAccess: s.optional(s.lazy(() => usersWithAccessSchema)),
  versions: versionsSchema,
  _keysMap: {
    ancestorPath: "ancestor_path",
    availableAlbums: "available_albums",
    availableChannels: "available_channels",
    publishToSocial: "publish_to_social",
    resourceCreatorTeamUser: "resource_creator_team_user",
    teamPermissions: "team_permissions",
    usersWithAccess: "users_with_access",
  },
});
