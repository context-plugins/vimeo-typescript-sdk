import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Information about where and how to get a list of team members or groups who were explicitly
 * invited to a video, and where and how to invite a team member to a video.
 */
export type Invite = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const inviteSchema: Schema<Invite> = s.object<Invite>({
  options: s.array(s.string()),
  uri: s.string(),
});
