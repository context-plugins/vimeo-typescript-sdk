import { s, type Schema } from "../core/index.js";

export type MeFollowingRequest = {
  users: string[];
};

export const meFollowingRequestSchema: Schema<MeFollowingRequest> = s.object<MeFollowingRequest>({
  users: s.array(s.string()),
});
