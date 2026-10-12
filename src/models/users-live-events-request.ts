import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersLiveEventsRequest = {
  /** An array of event URIs. */
  events: string[];
};

export const usersLiveEventsRequestSchema: Schema<UsersLiveEventsRequest> = s.object<UsersLiveEventsRequest>({
  events: s.array(s.string()),
});
