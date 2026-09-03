import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersPicturesRequest = {
  active?: boolean;
};

export const usersPicturesRequestSchema: Schema<UsersPicturesRequest> = s.object<UsersPicturesRequest>({
  active: s.optional(s.boolean()),
});
