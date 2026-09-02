import { s, type Schema } from "../core/index.js";

export type ChannelsPrivacyUsersRequest = {
  users: string[];
};

export const channelsPrivacyUsersRequestSchema: Schema<ChannelsPrivacyUsersRequest> =
  s.object<ChannelsPrivacyUsersRequest>({
    users: s.array(s.string()),
  });
