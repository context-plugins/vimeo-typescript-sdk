import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
