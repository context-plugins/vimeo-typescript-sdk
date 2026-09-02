import { s, type Schema } from "../core/index.js";

export type UsersPicturesRequest = {
  active?: boolean;
};

export const usersPicturesRequestSchema: Schema<UsersPicturesRequest> = s.object<UsersPicturesRequest>({
  active: s.optional(s.boolean()),
});
