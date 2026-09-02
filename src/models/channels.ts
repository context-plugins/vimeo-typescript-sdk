import { s, type Schema } from "../core/index.js";

export type Channels = {
  options: string[];
  total: number;
  uri: string;
};

export const channelsSchema: Schema<Channels> = s.object<Channels>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
