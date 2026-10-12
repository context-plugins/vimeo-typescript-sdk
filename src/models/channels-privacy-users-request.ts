import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChannelsPrivacyUsersRequest = {
  /** The array of either the user URIs or the user IDs to permit to access the private channel. */
  users: string[];
};

export const channelsPrivacyUsersRequestSchema: Schema<ChannelsPrivacyUsersRequest> =
  s.object<ChannelsPrivacyUsersRequest>({
    users: s.array(s.string()),
  });
