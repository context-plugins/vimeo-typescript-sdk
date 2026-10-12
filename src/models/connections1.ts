import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { privacyUsersSchema, type PrivacyUsers } from "./privacy-users.js";
import { requestedClipSchema, type RequestedClip } from "./requested-clip.js";
import { users1Schema, type Users1 } from "./users1.js";
import { videos1Schema, type Videos1 } from "./videos1.js";

/** A collection of information that is connected to this resource. */
export type Connections1 = {
  /**
   * Information provided to channel moderators about which users they have specifically permitted
   * to access this private channel. This data requires a bearer token with the `private` scope.
   */
  privacyUsers: PrivacyUsers;
  /** Information about the requested video. */
  requestedClip: RequestedClip;
  /** Information about the users following or moderating this channel. */
  users: Users1;
  /** Information about the videos that belong to this channel. */
  videos: Videos1;
};

export const connections1Schema: Schema<Connections1> = s.object<Connections1>({
  privacyUsers: privacyUsersSchema,
  requestedClip: requestedClipSchema,
  users: users1Schema,
  videos: videos1Schema,
  _keysMap: {
    privacyUsers: "privacy_users",
    requestedClip: "requested_clip",
  },
});
