import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChannelsPrivacyUsersRequest = {
  users: string[];
};

export const channelsPrivacyUsersRequestSchema: Schema<ChannelsPrivacyUsersRequest> =
  s.object<ChannelsPrivacyUsersRequest>({
    users: s.array(s.string()),
  });
