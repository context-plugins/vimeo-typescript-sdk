import { s, type Schema } from "../core/index.js";

export type AvailableChannels = {
  options?: string[];
  total?: number;
  uri?: string;
};

export const availableChannelsSchema: Schema<AvailableChannels> = s.object<AvailableChannels>({
  options: s.optional(s.array(s.string())),
  total: s.optional(s.number()),
  uri: s.optional(s.string()),
});
