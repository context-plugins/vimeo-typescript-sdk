import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
