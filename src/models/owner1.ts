import { s, type Schema } from "../core/index.js";

export type Owner1 = {
  displayName: string;
  email: string;
  invitesRemaining: number;
  options: string[];
  total: number;
  totalMembers: number;
  uri: string;
};

export const owner1Schema: Schema<Owner1> = s.object<Owner1>({
  displayName: s.string(),
  email: s.string(),
  invitesRemaining: s.number(),
  options: s.array(s.string()),
  total: s.number(),
  totalMembers: s.number(),
  uri: s.string(),
  _keysMap: {
    displayName: "display_name",
    invitesRemaining: "invites_remaining",
    totalMembers: "total_members",
  },
});
