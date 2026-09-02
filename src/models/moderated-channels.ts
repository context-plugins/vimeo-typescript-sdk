import { s, type Schema } from "../core/index.js";

export type ModeratedChannels = {
  options: string[];
  total: number;
  uri: string;
};

export const moderatedChannelsSchema: Schema<ModeratedChannels> = s.object<ModeratedChannels>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
