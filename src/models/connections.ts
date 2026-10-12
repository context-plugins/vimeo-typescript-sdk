import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { channelsSchema, type Channels } from "./channels.js";
import { groupsSchema, type Groups } from "./groups.js";
import { usersSchema, type Users } from "./users.js";
import { videosSchema, type Videos } from "./videos.js";

/** A collection of information that is connected to this resource. */
export type Connections = {
  /** Information about the channels related to this category. */
  channels: Channels;
  /** Information about the groups related to this category. */
  groups: Groups;
  /** Information about the users related to this category. */
  users: Users;
  /** Information about the videos related to this category. */
  videos: Videos;
};

export const connectionsSchema: Schema<Connections> = s.object<Connections>({
  channels: channelsSchema,
  groups: groupsSchema,
  users: usersSchema,
  videos: videosSchema,
});
