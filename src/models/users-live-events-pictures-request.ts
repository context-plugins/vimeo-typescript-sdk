import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersLiveEventsPicturesRequest = {
  active?: boolean;
};

export const usersLiveEventsPicturesRequestSchema: Schema<UsersLiveEventsPicturesRequest> =
  s.object<UsersLiveEventsPicturesRequest>({
    active: s.optional(s.boolean()),
  });
