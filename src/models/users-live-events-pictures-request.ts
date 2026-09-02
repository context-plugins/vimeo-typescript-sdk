import { s, type Schema } from "../core/index.js";

export type UsersLiveEventsPicturesRequest = {
  active?: boolean;
};

export const usersLiveEventsPicturesRequestSchema: Schema<UsersLiveEventsPicturesRequest> =
  s.object<UsersLiveEventsPicturesRequest>({
    active: s.optional(s.boolean()),
  });
