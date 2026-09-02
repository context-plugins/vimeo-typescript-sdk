import { s, type Schema } from "../core/index.js";
import { privacyUsersSchema, type PrivacyUsers } from "./privacy-users.js";
import { requestedClipSchema, type RequestedClip } from "./requested-clip.js";
import { users1Schema, type Users1 } from "./users1.js";
import { videos1Schema, type Videos1 } from "./videos1.js";

export type Connections1 = {
  privacyUsers: PrivacyUsers;
  requestedClip: RequestedClip;
  users: Users1;
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
