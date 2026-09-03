import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { channelsSchema, type Channels } from "./channels.js";
import { groupsSchema, type Groups } from "./groups.js";
import { usersSchema, type Users } from "./users.js";
import { videosSchema, type Videos } from "./videos.js";

export type Connections = {
  channels: Channels;
  groups: Groups;
  users: Users;
  videos: Videos;
};

export const connectionsSchema: Schema<Connections> = s.object<Connections>({
  channels: channelsSchema,
  groups: groupsSchema,
  users: usersSchema,
  videos: videosSchema,
});
