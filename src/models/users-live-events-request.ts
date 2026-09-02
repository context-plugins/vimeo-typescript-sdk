import { s, type Schema } from "../core/index.js";

export type UsersLiveEventsRequest = {
  events: string[];
};

export const usersLiveEventsRequestSchema: Schema<UsersLiveEventsRequest> = s.object<UsersLiveEventsRequest>({
  events: s.array(s.string()),
});
